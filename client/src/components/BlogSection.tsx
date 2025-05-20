import { Link } from "wouter";
import { useBlogData } from "@/hooks/use-blog-data";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";

export default function BlogSection() {
  const { featuredPosts, isLoading, error } = useBlogData();

  return (
    <section id="blog" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-secondary text-3xl md:text-4xl font-bold mb-4">Karate Insights & Techniques</h2>
          <div className="section-divider"></div>
          <p className="text-foreground max-w-3xl mx-auto">
            Explore our collection of articles about Shotokan Karate techniques, philosophy, and training insights.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-4 w-20 mb-3" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">Error loading blog posts</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <Badge 
                    variant={
                      post.category === "Technique" ? "default" : 
                      post.category === "Philosophy" ? "secondary" : 
                      "outline"
                    }
                    className="mb-3"
                  >
                    {post.category}
                  </Badge>
                  <h3 className="font-heading text-secondary text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <a className="text-primary font-semibold hover:underline">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-10">
          <Link href="/blog">
            <a className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-md transition duration-300">
              View All Articles
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
