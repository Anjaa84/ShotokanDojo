import { Link } from "wouter";
import { useInstructorData } from "@/hooks/use-instructor-data";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function InstructorsSection() {
  const { instructors, isLoading, error } = useInstructorData();

  return (
    <section id="instructors" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-secondary text-3xl md:text-4xl font-bold mb-4">Our Expert Instructors</h2>
          <div className="section-divider"></div>
          <p className="text-foreground max-w-3xl mx-auto">
            Meet our team of certified black belt instructors dedicated to passing on the traditional art of karate at TMAO Karate Academy.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-background rounded-lg overflow-hidden shadow-md">
                <Skeleton className="w-full h-64" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                  <Skeleton className="h-4 w-full mb-3" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">Error loading instructors</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map(instructor => (
              <div key={instructor.id} className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img 
                  src={instructor.imageUrl} 
                  alt={`${instructor.name} demonstrating karate technique`} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-heading text-secondary text-xl font-bold">{instructor.name}</h3>
                    <Badge variant={instructor.title === "Chief Instructor" ? "default" : "secondary"} className="text-xs">
                      {instructor.title}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{instructor.belt} • {instructor.experience}</p>
                  <p className="text-foreground mb-4">{instructor.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, index) => (
                      <span key={index} className="inline-block bg-muted text-foreground text-xs px-3 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-10">
          <Link href="/instructors" className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-md transition duration-300">
            View All Instructors
          </Link>
        </div>
      </div>
    </section>
  );
}
