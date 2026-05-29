import { locations, schedules } from "@/data/staticData";
import type { Schedule } from "@shared/schema";

export const useLocationsData = () => {
  const locationSchedules: Record<number, Schedule[]> = {};
  for (const loc of locations) {
    locationSchedules[loc.id] = schedules.filter((s) => s.locationId === loc.id);
  }

  return {
    locations,
    locationSchedules,
    isLoading: false,
    error: null,
  };
};

export const useLocationDetails = (id: number) => ({
  location: locations.find((l) => l.id === id),
  schedules: schedules.filter((s) => s.locationId === id),
  isLoading: false,
  error: null,
});
