import { useQuery } from "@tanstack/react-query";
import { Instructor } from "@shared/schema";

export const useInstructorData = () => {
  const { 
    data: instructors = [], 
    isLoading, 
    error 
  } = useQuery<Instructor[]>({
    queryKey: ['/api/instructors']
  });
  
  return {
    instructors,
    isLoading,
    error
  };
};

export const useFeaturedInstructorData = () => {
  const { 
    data: instructors = [], 
    isLoading, 
    error 
  } = useQuery<Instructor[]>({
    queryKey: ['/api/instructors/featured']
  });
  
  return {
    instructors,
    isLoading,
    error
  };
};

export const useInstructorDetails = (id: number) => {
  const { 
    data: instructor, 
    isLoading, 
    error 
  } = useQuery<Instructor>({
    queryKey: [`/api/instructors/${id}`],
    enabled: !!id
  });
  
  return {
    instructor,
    isLoading,
    error
  };
};
