import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Before & After", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b-2 border-warm-orange/20 shadow-sm' 
        : 'bg-transparent border-b-2 border-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/866ea9cb-85a6-4fee-9aab-999bfdc71174.png" 
              alt="PJ's Doors Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-all duration-300 relative group ${
                  scrolled 
                    ? 'text-foreground hover:text-warm-orange' 
                    : 'text-white hover:text-warm-orange'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-warm-orange group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+17653771000"
              className="flex items-center gap-2 text-warm-orange hover:text-warm-orange/80 font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              765.377.1000
            </a>
            <Button variant="retro" size="sm" style={{ backgroundColor: '#C85E28' }}>
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-all duration-300 ${
              scrolled 
                ? 'text-chocolate-brown hover:text-warm-orange' 
                : 'text-white hover:text-warm-orange'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-warm-orange/20 bg-cream/95 backdrop-blur-sm animate-slide-up">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-warm-orange font-medium transition-colors px-4 py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-warm-orange/20 space-y-3">
                <a 
                  href="tel:+17653771000"
                  className="flex items-center gap-2 text-warm-orange font-bold text-lg"
                >
                  <Phone className="w-5 h-5" />
                  765.377.1000
                </a>
                <Button variant="retro" className="w-full">
                  Get Free Estimate
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}