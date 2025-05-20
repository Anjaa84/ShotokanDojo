import { useQuery } from "@tanstack/react-query";
import { GalleryImage } from "@shared/schema";

export const useGalleryData = () => {
  const { 
    data: images = [], 
    isLoading, 
    error 
  } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery']
  });
  
  return {
    images,
    isLoading,
    error
  };
};

export const useGalleryCategory = (category: string) => {
  const { 
    data: images = [], 
    isLoading, 
    error 
  } = useQuery<GalleryImage[]>({
    queryKey: [`/api/gallery/category/${category}`],
    enabled: !!category && category !== 'all'
  });
  
  return {
    images,
    isLoading,
    error
  };
};

export const useFeaturedGalleryData = () => {
  const { 
    data: images = [], 
    isLoading, 
    error 
  } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery/featured']
  });
  
  return {
    images,
    isLoading,
    error
  };
};
