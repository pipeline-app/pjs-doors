import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/bae767a5-7917-4b08-be62-7e6aacbee251.png" 
          alt="Beautiful twilight house with prominent garage door"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-2xl min-h-screen flex flex-col justify-center">
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 text-sm mb-8 animate-slide-up">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Shield className="w-4 h-4" />
              <span className="font-semibold text-white">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="w-4 h-4" />
              <span className="font-semibold text-white">Family Owned</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="font-semibold text-white">Quality Service</span>
            </div>
          </div>

          {/* Main Headlines */}
          <div className="space-y-6 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl lg:text-7xl font-retro font-black text-white leading-tight">
              PJ'S
              <br />
              <span className="text-vintage-yellow">DOORS</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Install • Repair • Maintenance
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-lg">
              Family owned, licensed & insured. We handle residential & commercial garage doors, 
              overhead doors, roll-up doors, high speed doors, and more!
            </p>
          </div>

          {/* CTAs */}
          <div className="space-y-6 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="heroCall" size="lg" className="text-xl">
                Get FREE Estimate
              </Button>
              <Button variant="estimate" size="lg">
                Schedule Service
              </Button>
            </div>
            
            {/* Phone Number */}
            <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg border-2 border-white/30">
              <Phone className="w-6 h-6 text-vintage-yellow animate-pulse" />
              <div>
                <p className="text-sm text-white/80">Call Today:</p>
                <a 
                  href="tel:+17653771000" 
                  className="text-2xl font-bold text-white hover:text-vintage-yellow transition-colors"
                >
                  765.377.1000
                </a>
              </div>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-vintage-yellow">FREE</div>
              <div className="text-sm text-white/80">Estimates</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-vintage-yellow">SAME DAY</div>
              <div className="text-sm text-white/80">Service Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}