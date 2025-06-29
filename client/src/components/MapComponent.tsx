import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  coordinates: string; 
  mapUrl?: string; // Format: "lat,lng"
}

export default function MapComponent({ coordinates, mapUrl }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const initMap = async () => {
      // Dynamically import Leaflet client-side
      const L = (await import('leaflet')).default;
      
      const [lat, lng] = coordinates.split(',').map(coord => parseFloat(coord.trim()));
      
      // If a map already exists, remove it first
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      
      // Ensure the map container exists
      if (!mapRef.current) return;
      // Clear any previous map content
      mapRef.current.innerHTML = "";
      
      // Create the map
      const map = L?.map(mapRef.current).setView([lat, lng], 15);
      
      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      // Add marker
      L.marker([lat, lng]).addTo(map)
        .bindPopup('Dojo Location')
        .openPopup();
      
      // Store map instance so we can clean it up later
      mapInstanceRef.current = map;
    };
    
    initMap();
    
    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [coordinates, mapUrl]);
  
  return (
    <div className="w-full h-full">
      {mapUrl ? (
        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full h-full"
          style={{ pointerEvents: 'none' }}
        >
          <div ref={mapRef} className="w-full h-full" />
        </a>
      ) : (
        <div ref={mapRef} className="w-full h-full" />
      )}
    </div>
  );
}
