import { galleryImages } from "@/data/staticData";

export const useGalleryData = () => ({
  images: galleryImages,
  isLoading: false,
  error: null,
});

export const useGalleryCategory = (category: string) => ({
  images: category === "all" ? galleryImages : galleryImages.filter((i) => i.category === category),
  isLoading: false,
  error: null,
});

export const useFeaturedGalleryData = () => ({
  images: galleryImages.filter((i) => i.featured),
  isLoading: false,
  error: null,
});
