import { useState } from "react";
import { Helmet } from 'react-helmet';
import { Link } from "wouter";
import { useBlogData } from "@/hooks/use-blog-data";
import { formatDateString } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";

export default function BlogPage() {
  const { posts, isLoading, error } = useBlogData();
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = posts.length > 0 
    ? ["all", ...new Set(posts.map(post => post.category))]
    : ["all"];
  
  const filteredPosts = activeCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Karate Blog & Articles | Shotokan Karate Academy</title>
        <meta 
          name="description" 
          content="Explore our collection of articles about Shotokan Karate techniques, philosophy, and training insights from expert instructors."
        />
        <meta property="og:title" content="Karate Blog & Articles | Shotokan Karate Academy" />
        <meta property="og:description" content="Learn about karate techniques, philosophy, and training insights from our expert instructors." />
      </Helmet>

      <div className="bg-secondary py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Karate Insights & Techniques</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore our collection of articles about Shotokan Karate techniques, philosophy, and training insights
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Skeleton className="w-full h-48" />
                  <div className="p-6">
                    <Skeleton className="h-4 w-20 mb-3" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-24 w-full mb-4" />
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
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-muted-foreground">No articles found in this category. Please select a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
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
                        {formatDateString(post.createdAt)}
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
