import { useQuery } from "@tanstack/react-query";
import { Location, Schedule } from "@shared/schema";
import { useState, useEffect } from "react";

export const useLocationsData = () => {
  const [locationSchedules, setLocationSchedules] = useState<Record<number, Schedule[]>>({});
  
  // Query for locations
  const { 
    data: locations = [], 
    isLoading: isLocationsLoading, 
    error: locationsError 
  } = useQuery<Location[]>({
    queryKey: ['/api/locations']
  });
  
  // Track loading state for all schedules
  const [isSchedulesLoading, setIsSchedulesLoading] = useState(false);
  
  // Fetch schedules for each location
  useEffect(() => {
    if (locations.length > 0) {
      setIsSchedulesLoading(true);
      
      const fetchSchedules = async () => {
        const schedulesData: Record<number, Schedule[]> = {};
        
        try {
          const promises = locations.map(async location => {
            const res = await fetch(`/api/locations/${location.id}/schedules`);
            if (!res.ok) {
              throw new Error(`Failed to fetch schedules for location ${location.id}`);
            }
            const data = await res.json();
            schedulesData[location.id] = data;
          });
          
          await Promise.all(promises);
          setLocationSchedules(schedulesData);
        } catch (error) {
          console.error('Error fetching schedules:', error);
        } finally {
          setIsSchedulesLoading(false);
        }
      };
      
      fetchSchedules();
    }
  }, [locations]);
  
  // Combined loading state for both locations and schedules
  const isLoading = isLocationsLoading || isSchedulesLoading;
  const error = locationsError;
  
  return {
    locations,
    locationSchedules,
    isLoading,
    error
  };
};

export const useLocationDetails = (id: number) => {
  // Query for specific location
  const { 
    data: location,
    isLoading: isLocationLoading,
    error: locationError 
  } = useQuery<Location>({
    queryKey: [`/api/locations/${id}`]
  });
  
  // Query for location schedules
  const { 
    data: schedules = [],
    isLoading: isSchedulesLoading,
    error: schedulesError
  } = useQuery<Schedule[]>({
    queryKey: [`/api/locations/${id}/schedules`],
    enabled: !!id
  });
  
  const isLoading = isLocationLoading || isSchedulesLoading;
  const error = locationError || schedulesError;
  
  return {
    location,
    schedules,
    isLoading,
    error
  };
};
