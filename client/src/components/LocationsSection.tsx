import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import { useLocationsData } from "@/hooks/use-location-data";
import MapComponent from "./MapComponent";

export default function LocationsSection() {
  const { locations, locationSchedules, isLoading, error } = useLocationsData();
  const [activeLocationId, setActiveLocationId] = useState<number | null>(null);
  const [activeDay, setActiveDay] = useState("Monday");

  // Set the first location as active when data loads
  if (!isLoading && !error && locations.length > 0 && activeLocationId === null) {
    setActiveLocationId(locations[0].id);
  }

  const activeLocation = locations.find(loc => loc.id === activeLocationId);
  const schedules = locationSchedules[activeLocationId || 0] || [];
  const activeSchedule = schedules.find(s => s.day === activeDay);

  return (
    <section id="locations" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-secondary text-3xl md:text-4xl font-bold mb-4">Our Dojos & Class Schedule</h2>
          <div className="section-divider"></div>
          <p className="text-foreground max-w-3xl mx-auto">
            Find a convenient location and schedule that fits your needs. All dojos offer a variety of class times for different age groups and skill levels.
          </p>
        </div>
        
        {isLoading ? (
          <div className="text-center py-8">Loading locations...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">Error loading locations</div>
        ) : (
          <>
            {/* Locations Tabs */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {locations.map(location => (
                  <button 
                    key={location.id}
                    className={`px-4 py-2 rounded-md transition ${
                      activeLocationId === location.id 
                        ? "bg-primary text-white" 
                        : "bg-muted hover:bg-muted/80"
                    }`}
                    onClick={() => setActiveLocationId(location.id)}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
              
              {/* Location Content */}
              {activeLocation && (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Location Info */}
                  <div className="flex flex-col md:flex-row">
                    {/* Map */}
                    <div className="md:w-1/2 h-[300px] bg-muted">
                      <MapComponent coordinates={activeLocation.coordinates} />
                    </div>
                    
                    {/* Location Details */}
                    <div className="md:w-1/2 p-6">
                      <h3 className="font-heading text-secondary text-2xl font-bold mb-2">{activeLocation.name}</h3>
                      <p className="mb-4">
                        <MapPin className="inline-block text-primary mr-2 h-5 w-5" /> 
                        {activeLocation.address}
                      </p>
                      <p className="mb-4">
                        <Phone className="inline-block text-primary mr-2 h-5 w-5" /> 
                        {activeLocation.phone}
                      </p>
                      <p className="mb-6">
                        <Mail className="inline-block text-primary mr-2 h-5 w-5" /> 
                        {activeLocation.email}
                      </p>
                      
                      <h4 className="font-heading text-lg font-bold mb-2">Facilities:</h4>
                      <ul className="mb-6 grid grid-cols-2 gap-2">
                        {activeLocation.facilities.map((facility, index) => (
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
                    <h3 className="font-heading text-secondary text-xl font-bold mb-4">Class Schedule</h3>
                    
                    {/* Days of Week Tabs */}
                    <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
                      {schedules.map(schedule => (
                        <div 
                          key={schedule.day}
                          className={`schedule-day px-3 py-2 cursor-pointer ${activeDay === schedule.day ? 'active' : ''}`}
                          onClick={() => setActiveDay(schedule.day)}
                        >
                          {schedule.day}
                        </div>
                      ))}
                    </div>
                    
                    {/* Schedule Content */}
                    {activeSchedule ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeSchedule.classes.classes.map((classItem, index) => (
                          <div key={index} className="bg-muted p-4 rounded-md">
                            <div className="flex justify-between mb-2">
                              <span className="font-bold">{classItem.name}</span>
                              <span className="text-primary">{classItem.time}</span>
                            </div>
                            <p className="text-sm">{classItem.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No classes scheduled for this day.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        
        <div className="text-center mt-10">
          <Link href="/locations">
            <a className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-md transition duration-300">
              View All Locations
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
