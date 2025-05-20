import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useParams, Link } from "wouter";
import { useBlogPostBySlug, useBlogData } from "@/hooks/use-blog-data";
import { formatDateString } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const { post, isLoading, error } = useBlogPostBySlug(slug || "");
  const { posts } = useBlogData();
  
  // Scroll to top when blog post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Get related posts (same category)
  const relatedPosts = posts
    .filter(p => p.category === post?.category && p.slug !== post?.slug)
    .slice(0, 3);

  return (
    <>
      {post && (
        <Helmet>
          <title>{post.title} | Shotokan Karate Academy</title>
          <meta name="description" content={post.excerpt} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:image" content={post.imageUrl} />
        </Helmet>
      )}

      <div className="bg-secondary py-16 md:py-20 text-white">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <a className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Articles
            </a>
          </Link>
          
          {isLoading ? (
            <>
              <Skeleton className="h-12 w-3/4 mx-auto mb-4 bg-white/20" />
              <Skeleton className="h-6 w-1/2 mx-auto mb-8 bg-white/20" />
            </>
          ) : error ? (
            <div className="text-center py-8">
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Article Not Found</h1>
              <p>The article you're looking for couldn't be loaded or doesn't exist.</p>
            </div>
          ) : post ? (
            <>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto text-center">
                {post.title}
              </h1>
              <div className="flex items-center justify-center mb-8 gap-4 text-white/80 text-sm">
                <Badge variant="outline" className="text-white border-white/30">
                  {post.category}
                </Badge>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {formatDateString(post.createdAt)}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="max-w-3xl mx-auto space-y-4">
              <Skeleton className="w-full h-[400px] mb-8 rounded-lg" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">Failed to load the article. Please try again later.</p>
              <Link href="/blog">
                <a className="text-primary hover:underline mt-4 inline-block">Return to Blog</a>
              </Link>
            </div>
          ) : post ? (
            <div className="max-w-3xl mx-auto">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md mb-8" 
              />
              
              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="border-t border-border pt-8 mt-8">
                <Link href="/blog">
                  <a className="text-primary font-semibold hover:underline inline-flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
                  </a>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Related Articles */}
      {!isLoading && !error && post && relatedPosts.length > 0 && (
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-secondary text-2xl font-bold mb-8 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <img 
                    src={relatedPost.imageUrl} 
                    alt={relatedPost.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-6">
                    <Badge 
                      variant={
                        relatedPost.category === "Technique" ? "default" : 
                        relatedPost.category === "Philosophy" ? "secondary" : 
                        "outline"
                      }
                      className="mb-3"
                    >
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-heading text-secondary text-xl font-bold mb-2">{relatedPost.title}</h3>
                    <p className="text-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <a className="text-primary font-semibold hover:underline">Read Article</a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
