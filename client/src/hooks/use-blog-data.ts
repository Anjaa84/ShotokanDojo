import { blogPosts } from "@/data/staticData";

export const useBlogData = () => ({
  posts: blogPosts,
  featuredPosts: blogPosts.filter((p) => p.featured),
  isLoading: false,
  error: null,
});

export const useBlogPostBySlug = (slug: string) => ({
  post: blogPosts.find((p) => p.slug === slug),
  isLoading: false,
  error: null,
});
