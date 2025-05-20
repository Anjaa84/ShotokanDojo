import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube, Layers } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to an API
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-secondary text-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="font-accent text-2xl text-accent">TMAO</div>
              <div className="text-white font-heading font-bold">Karate Academy</div>
            </div>
            <p className="mb-6 text-white/80">Dedicated to teaching traditional Shotokan Karate since 1992. We provide martial arts education for all ages in a respectful, disciplined environment.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-accent transition duration-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition duration-300" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-accent transition duration-300">Home</Link></li>
              <li><Link href="/#about" className="text-white/80 hover:text-accent transition duration-300">About Us</Link></li>
              <li><Link href="/locations" className="text-white/80 hover:text-accent transition duration-300">Class Locations</Link></li>
              <li><Link href="/instructors" className="text-white/80 hover:text-accent transition duration-300">Instructors</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-accent transition duration-300">Blog</Link></li>
              <li><Link href="/gallery" className="text-white/80 hover:text-accent transition duration-300">Gallery</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-accent transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Programs Column */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-white">Our Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-accent transition duration-300">Kids Karate (5-12 years)</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition duration-300">Teen Karate (13-17 years)</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition duration-300">Adult Beginners</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition duration-300">Advanced Training</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition duration-300">Competition Team</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition duration-300">Self-Defense Workshops</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition duration-300">Private Lessons</a></li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-6 text-white">Newsletter</h3>
            <p className="mb-4 text-white/80">Subscribe to our newsletter for karate tips, event updates, and exclusive content.</p>
            <form className="mb-4" onSubmit={handleSubscribe}>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-r-none text-dark" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-l-none"
                  size="icon"
                >
                  <Layers className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <p className="text-sm text-white/60">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-white/80">
          <p>© {new Date().getFullYear()} Shotokan Karate Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
