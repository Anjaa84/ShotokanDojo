import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import AboutSection from '@/components/AboutSection';
import LocationsSection from '@/components/LocationsSection';
import InstructorsSection from '@/components/InstructorsSection';
import BlogSection from '@/components/BlogSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shotokan Karate Academy | Traditional Karate Training</title>
        <meta 
          name="description" 
          content="Join our traditional Shotokan Karate academy to develop discipline, strength, and character through authentic martial arts training for all ages and skill levels."
        />
        <meta property="og:title" content="Shotokan Karate Academy" />
        <meta property="og:description" content="Join our traditional Shotokan Karate academy to develop discipline, strength, and character through authentic martial arts training." />
        <meta property="og:type" content="website" />
      </Helmet>
    
      <HeroSection />
      <FeaturedSection />
      <AboutSection />
      <LocationsSection />
      <InstructorsSection />
      <BlogSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
