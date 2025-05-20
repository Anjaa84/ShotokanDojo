import { useState } from "react";
import { Helmet } from 'react-helmet';
import { useLocationsData } from "@/hooks/use-location-data";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import MapComponent from "@/components/MapComponent";
import CTASection from "@/components/CTASection";

export default function LocationsPage() {
  const { locations, locationSchedules, isLoading, error } = useLocationsData();
  const [activeDay, setActiveDay] = useState("Monday");
  
  // Default days for schedules
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <>
      <Helmet>
        <title>Locations & Class Schedules | Shotokan Karate Academy</title>
        <meta 
          name="description" 
          content="Find Shotokan Karate Academy locations near you. View our class schedules and facility information for all our dojos."
        />
        <meta property="og:title" content="Locations & Class Schedules | Shotokan Karate Academy" />
        <meta property="og:description" content="Find a convenient location and schedule that fits your needs. All dojos offer a variety of class times for different age groups and skill levels." />
      </Helmet>

      <div className="bg-secondary py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Dojos</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Find a location near you and explore our class schedules
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="space-y-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <Skeleton className="md:w-1/2 h-[300px]" />
                    <div className="md:w-1/2 p-6">
                      <Skeleton className="h-8 w-48 mb-4" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-4 w-full mb-6" />
                      <Skeleton className="h-6 w-32 mb-2" />
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                      <Skeleton className="h-10 w-40" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">
              Error loading locations. Please try again later.
            </div>
          ) : (
            <div className="space-y-16">
              {locations.map(location => (
                <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Map */}
                    <div className="md:w-1/2 h-[300px] bg-muted">
                      <MapComponent coordinates={location.coordinates} />
                    </div>
                    
                    {/* Location Details */}
                    <div className="md:w-1/2 p-6">
                      <h2 className="font-heading text-secondary text-2xl font-bold mb-2">{location.name}</h2>
                      <p className="mb-4">
                        <MapPin className="inline-block text-primary mr-2 h-5 w-5" /> 
                        {location.address}
                      </p>
                      <p className="mb-4">
                        <Phone className="inline-block text-primary mr-2 h-5 w-5" /> 
                        {location.phone}
                      </p>
                      <p className="mb-6">
                        <Mail className="inline-block text-primary mr-2 h-5 w-5" /> 
                        {location.email}
                      </p>
                      
                      <h3 className="font-heading text-lg font-bold mb-2">Facilities:</h3>
                      <ul className="mb-6 grid grid-cols-2 gap-2">
                        {location.facilities.map((facility, index) => (
                          <li key={index}>
                            <Check className="inline-block text-primary mr-2 h-4 w-4" /> 
                            {facility}
                          </li>
                        ))}
                      </ul>
                      
                      <Link href="/contact">
                        <a className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                          Contact This Location
                        </a>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Schedule */}
                  <div className="border-t border-border p-6">
                    <h3 className="font-heading text-secondary text-xl font-bold mb-4">
                      Class Schedule
                    </h3>
                    
                    {locationSchedules[location.id] ? (
                      <Tabs defaultValue="Monday" onValueChange={setActiveDay}>
                        <TabsList className="mb-6">
                          {days.map(day => {
                            // Check if this location has a schedule for this day
                            const hasSchedule = locationSchedules[location.id]?.some(
                              s => s.day === day
                            );
                            
                            if (!hasSchedule) return null;
                            
                            return (
                              <TabsTrigger key={day} value={day}>
                                {day}
                              </TabsTrigger>
                            );
                          })}
                        </TabsList>
                        
                        {days.map(day => {
                          const schedule = locationSchedules[location.id]?.find(
                            s => s.day === day
                          );
                          
                          if (!schedule) return null;
                          
                          return (
                            <TabsContent key={day} value={day} className="mt-0">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {schedule.classes.classes.map((classItem, index) => (
                                  <div key={index} className="bg-muted p-4 rounded-md">
                                    <div className="flex justify-between mb-2">
                                      <span className="font-bold">{classItem.name}</span>
                                      <span className="text-primary">{classItem.time}</span>
                                    </div>
                                    <p className="text-sm">{classItem.description}</p>
                                  </div>
                                ))}
                              </div>
                            </TabsContent>
                          );
                        })}
                      </Tabs>
                    ) : (
                      <p>No schedule information available for this location.</p>
                    )}
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
