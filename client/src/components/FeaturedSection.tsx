import { Medal, Dumbbell, Users } from "lucide-react";

export default function FeaturedSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-secondary text-3xl md:text-4xl font-bold mb-4">Why Choose Our Academy?</h2>
          <div className="section-divider"></div>
          <p className="text-dark max-w-3xl mx-auto">Experience authentic Shotokan Karate training that balances traditional values with modern teaching methods.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition duration-300">
            <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <Medal className="text-white text-2xl" />
            </div>
            <h3 className="font-heading text-secondary text-xl font-bold mb-2">Expert Instructors</h3>
            <p className="text-dark">Learn from certified black belt instructors with decades of combined experience in Shotokan Karate.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition duration-300">
            <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <Dumbbell className="text-white text-2xl" />
            </div>
            <h3 className="font-heading text-secondary text-xl font-bold mb-2">Comprehensive Training</h3>
            <p className="text-dark">Build strength, flexibility, discipline, and self-defense skills through our balanced curriculum.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-muted p-6 rounded-lg text-center hover:shadow-md transition duration-300">
            <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <Users className="text-white text-2xl" />
            </div>
            <h3 className="font-heading text-secondary text-xl font-bold mb-2">Inclusive Community</h3>
            <p className="text-dark">Join a supportive community of practitioners of all ages and skill levels pursuing martial arts excellence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
