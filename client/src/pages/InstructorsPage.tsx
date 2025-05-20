import { Helmet } from 'react-helmet';
import { useInstructorData } from "@/hooks/use-instructor-data";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";

export default function InstructorsPage() {
  const { instructors, isLoading, error } = useInstructorData();

  return (
    <>
      <Helmet>
        <title>Our Instructors | Shotokan Karate Academy</title>
        <meta 
          name="description" 
          content="Meet our certified black belt instructors dedicated to passing on the traditional art of Shotokan Karate through expert instruction."
        />
        <meta property="og:title" content="Our Instructors | Shotokan Karate Academy" />
        <meta property="og:description" content="Meet our team of certified black belt instructors with decades of experience in Shotokan Karate." />
      </Helmet>

      <div className="bg-secondary py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Expert Instructors</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Learn from experienced black belt instructors dedicated to passing on the traditional art of Shotokan Karate
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
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
            <>
              <div className="text-center mb-12">
                <h2 className="font-heading text-secondary text-3xl font-bold mb-4">Meet Our Team</h2>
                <div className="section-divider"></div>
                <p className="text-foreground max-w-3xl mx-auto">
                  Our instructors bring decades of combined experience to provide you with the highest quality karate training.
                </p>
              </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {instructors.map(instructor => (
                  <div key={instructor.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
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
            </>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-secondary text-3xl font-bold mb-6">Interested in Training with Our Instructors?</h2>
            <p className="text-foreground mb-8">
              Our instructors teach classes at all our locations throughout the week. Check our location pages for specific schedules and find the perfect class for your skill level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/locations" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block">
                View Class Schedules
              </a>
              <a href="/contact" className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block">
                Contact an Instructor
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
