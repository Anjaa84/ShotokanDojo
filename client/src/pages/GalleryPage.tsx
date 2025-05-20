import { useState } from "react";
import { Helmet } from 'react-helmet';
import { useGalleryData } from "@/hooks/use-gallery-data";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CTASection from "@/components/CTASection";

export default function GalleryPage() {
  const { images, isLoading, error } = useGalleryData();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "training", label: "Training" },
    { id: "events", label: "Events" },
    { id: "competitions", label: "Competitions" },
    { id: "facilities", label: "Facilities" }
  ];

  const filteredImages = activeFilter === "all" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Photo Gallery | Shotokan Karate Academy</title>
        <meta 
          name="description" 
          content="Browse photos of our karate training sessions, events, competitions, and dojo facilities." 
        />
        <meta property="og:title" content="Photo Gallery | Shotokan Karate Academy" />
        <meta property="og:description" content="See our karate academy in action through our photo gallery, showcasing training, events, and our facilities." />
      </Helmet>

      <div className="bg-secondary py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Dojo in Action</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Glimpses of our training sessions, events, competitions, and community activities
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Gallery Controls */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm bg-muted" role="group">
              {categories.map((category) => (
                <button 
                  key={category.id}
                  className={`px-4 py-2 text-sm font-medium ${
                    category.id === categories[0].id ? "rounded-l-lg" : ""
                  } ${
                    category.id === categories[categories.length-1].id ? "rounded-r-lg" : ""
                  } ${
                    activeFilter === category.id ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                <Skeleton key={i} className="w-full aspect-square rounded-lg" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">Error loading gallery images</div>
          ) : filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No images found</h3>
              <p className="text-muted-foreground">No images found in this category. Please select a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map(image => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(image.imageUrl)}
                    >
                      <img 
                        src={image.imageUrl} 
                        alt={image.title} 
                        className="w-full aspect-square object-cover hover:scale-105 transition duration-300" 
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 bg-transparent border-0">
                    <img 
                      src={image.imageUrl} 
                      alt={image.title} 
                      className="w-full h-auto rounded-lg" 
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          )}
          
          {!isLoading && !error && filteredImages.length > 0 && filteredImages.length % 4 === 0 && (
            <div className="text-center mt-10">
              <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-md transition duration-300">
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
