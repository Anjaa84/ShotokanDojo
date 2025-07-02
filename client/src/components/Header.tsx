import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="font-accent text-2xl text-primary">TMAO</div>
              <div className="text-secondary font-heading font-bold">Karate Academy</div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`nav-link ${isActive("/") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300`}>
              Home
            </Link>
            <Link href="/about" className={`nav-link ${isActive("/about") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300`}>
              About
            </Link>
            <Link href="/locations" className={`nav-link ${isActive("/locations") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300`}>
              Locations
            </Link>
            <Link href="/instructors" className={`nav-link ${isActive("/instructors") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300`}>
              Instructors
            </Link>
            <Link href="/blog" className={`nav-link ${isActive("/blog") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300`}>
              Blog
            </Link>
            <Link href="/gallery" className={`nav-link ${isActive("/gallery") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300`}>
              Gallery
            </Link>
            <Link href="/contact" className={`nav-link ${isActive("/contact") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300`}>
              Contact
            </Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              className="text-secondary focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className={`nav-link ${isActive("/") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300 py-2`}>
                Home
              </Link>
              <Link href="/about" className={`nav-link ${isActive("/about") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300 py-2`}>
                About
              </Link>
              <Link href="/locations" className={`nav-link ${isActive("/locations") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300 py-2`}>
                Locations
              </Link>
              <Link href="/instructors" className={`nav-link ${isActive("/instructors") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300 py-2`}>
                Instructors
              </Link>
              <Link href="/blog" className={`nav-link ${isActive("/blog") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300 py-2`}>
                Blog
              </Link>
              <Link href="/gallery" className={`nav-link ${isActive("/gallery") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300 py-2`}>
                Gallery
              </Link>
              <Link href="/contact" className={`nav-link ${isActive("/contact") ? "active-nav text-primary" : "text-secondary"} hover:text-primary transition duration-300 py-2`}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
