import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";

export const useBlogData = () => {
  const { 
    data: posts = [], 
    isLoading: isAllPostsLoading, 
    error: allPostsError 
  } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog']
  });
  
  const { 
    data: featuredPosts = [], 
    isLoading: isFeaturedPostsLoading, 
    error: featuredPostsError 
  } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/featured']
  });
  
  const isLoading = isAllPostsLoading || isFeaturedPostsLoading;
  const error = allPostsError || featuredPostsError;
  
  return {
    posts,
    featuredPosts,
    isLoading,
    error
  };
};

export const useBlogPostBySlug = (slug: string) => {
  const { 
    data: post, 
    isLoading, 
    error 
  } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${slug}`],
    enabled: !!slug
  });
  
  return {
    post,
    isLoading,
    error
  };
};
