import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="hero-section h-[600px] md:h-[700px] flex items-center" 
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"}}
    >
      <div className="container mx-auto px-4 hero-content text-center">
        <h1 className="font-accent text-white text-4xl md:text-6xl mb-6">Mastering The Way of Karate</h1>
        <p className="font-heading text-white text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Join TMAO Karate Academy to develop discipline, strength, and character through authentic martial arts training.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/locations" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-md transition duration-300 shadow-lg inline-block">
            Find a Class
          </Link>
          <Link href="/#about" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
