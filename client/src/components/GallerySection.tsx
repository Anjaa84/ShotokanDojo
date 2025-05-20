import { useState } from "react";
import { Link } from "wouter";
import { useGalleryData } from "@/hooks/use-gallery-data";
import { Skeleton } from "@/components/ui/skeleton";

export default function GallerySection() {
  const { images, isLoading, error } = useGalleryData();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = activeFilter === "all" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-secondary text-3xl md:text-4xl font-bold mb-4">Our Dojo in Action</h2>
          <div className="section-divider"></div>
          <p className="text-foreground max-w-3xl mx-auto">
            Glimpses of our training sessions, events, competitions, and community activities.
          </p>
        </div>
        
        {/* Gallery Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm bg-muted" role="group">
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${activeFilter === "all" ? "bg-primary text-white" : ""}`} 
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeFilter === "training" ? "bg-primary text-white" : ""}`} 
              onClick={() => setActiveFilter("training")}
            >
              Training
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeFilter === "events" ? "bg-primary text-white" : ""}`} 
              onClick={() => setActiveFilter("events")}
            >
              Events
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeFilter === "competitions" ? "bg-primary text-white" : ""}`} 
              onClick={() => setActiveFilter("competitions")}
            >
              Competitions
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeFilter === "facilities" ? "bg-primary text-white" : ""}`} 
              onClick={() => setActiveFilter("facilities")}
            >
              Facilities
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <Skeleton key={i} className="w-full h-56 rounded-lg" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">Error loading gallery images</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                data-category={image.category}
              >
                <img 
                  src={image.imageUrl} 
                  alt={image.title} 
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300" 
                />
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-10">
          <Link href="/gallery" className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-md transition duration-300">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
