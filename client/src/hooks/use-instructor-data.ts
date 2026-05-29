import { instructors } from "@/data/staticData";

export const useInstructorData = () => ({
  instructors,
  isLoading: false,
  error: null,
});

export const useFeaturedInstructorData = () => ({
  instructors: instructors.filter((i) => i.featured),
  isLoading: false,
  error: null,
});

export const useInstructorDetails = (id: number) => ({
  instructor: instructors.find((i) => i.id === id),
  isLoading: false,
  error: null,
});
