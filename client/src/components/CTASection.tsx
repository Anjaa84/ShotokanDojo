import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-white text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Karate Journey?</h2>
        <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
          Take the first step toward physical fitness, mental discipline, and self-defense skills with a free trial class at any of our locations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/locations" className="bg-white text-primary hover:bg-white/90 hover:text-primary font-bold py-3 px-8 rounded-md transition duration-300 shadow-lg inline-block">
            Find a Location
          </Link>
          <Link href="/contact" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
