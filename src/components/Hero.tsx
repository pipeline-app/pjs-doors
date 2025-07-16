import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-garage-door.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="text-left space-y-8 animate-slide-up">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-primary-foreground/20 px-3 py-1 rounded-full">
                <Shield className="w-4 h-4" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/20 px-3 py-1 rounded-full">
                <Star className="w-4 h-4" />
                <span className="font-semibold">30+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/20 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">Same Day Service</span>
              </div>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-retro font-black text-primary-foreground leading-tight">
                BROKEN
                <br />
                <span className="text-vintage-yellow">GARAGE DOOR?</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground">
                We Fix It Fast!
              </h2>
              <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-lg">
                Professional garage door repair & replacement serving your community for over 30 years. 
                Same-day service, fair prices, guaranteed work.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="heroCall" size="lg" className="text-xl">
                  Get FREE Estimate
                </Button>
                <Button variant="emergency" size="lg">
                  Emergency Service
                </Button>
              </div>
              
              {/* Phone Number */}
              <div className="flex items-center gap-3 p-4 bg-primary-foreground/15 rounded-lg border-2 border-primary-foreground/30">
                <Phone className="w-6 h-6 text-vintage-yellow animate-pulse" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Call Now:</p>
                  <a 
                    href="tel:+15551234567" 
                    className="text-2xl font-bold text-primary-foreground hover:text-vintage-yellow transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-vintage-yellow">24/7</div>
                <div className="text-sm text-primary-foreground/80">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vintage-yellow">FREE</div>
                <div className="text-sm text-primary-foreground/80">Estimates</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:h-[600px] animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative h-full rounded-2xl overflow-hidden shadow-retro border-4 border-primary-foreground/20">
              <img 
                src={heroImage} 
                alt="Professional garage door installation and repair services"
                className="w-full h-full object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-vintage-yellow text-chocolate-brown px-4 py-2 rounded-lg font-bold shadow-lg">
                <div className="text-sm">Starting at</div>
                <div className="text-2xl font-black">$99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}