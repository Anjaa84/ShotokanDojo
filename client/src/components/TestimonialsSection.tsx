import { Star, StarHalf } from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  status: string;
  content: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch('/api/testimonials');
        if (!res.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await res.json();
        setTestimonials(data);
        setIsLoading(false);
      } catch (err) {
        setError('Error loading testimonials');
        setIsLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-accent text-accent" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-accent text-accent" />);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-secondary kanji-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-white text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <div className="section-divider"></div>
          <p className="text-white max-w-3xl mx-auto">
            Hear from our students about how karate training at our academy has impacted their lives.
          </p>
        </div>
        
        {isLoading ? (
          <div className="text-center py-8 text-white">Loading testimonials...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-300">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <span className="text-accent font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-white text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-white/70 text-sm">{testimonial.status}</p>
                  </div>
                </div>
                <p className="text-white mb-4">"{testimonial.content}"</p>
                <div className="flex text-accent">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
