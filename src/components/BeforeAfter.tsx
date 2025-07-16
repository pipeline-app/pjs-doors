import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import beforeAfterImage from "@/assets/before-after-garage.jpg";

export function BeforeAfter() {
  const transformations = [
    "Broken springs replaced",
    "Dented panels restored", 
    "Outdated opener upgraded",
    "Safety features installed"
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-sink font-black text-chocolate-brown mb-4">
            AMAZING
            <span className="text-warm-orange"> TRANSFORMATIONS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we transform broken, outdated garage doors into beautiful, functional entrances
          </p>
        </div>

        {/* Before/After Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-warm-orange/20">
              <img 
                src={beforeAfterImage} 
                alt="Before and after garage door transformation showing dramatic improvement"
                className="w-full h-[400px] object-cover"
              />
              
              {/* Before/After Labels */}
              <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-lg font-bold text-sm">
                BEFORE
              </div>
              <div className="absolute top-4 right-4 bg-retro-green text-primary-foreground px-3 py-1 rounded-lg font-bold text-sm">
                AFTER
              </div>
              
              {/* Arrow Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-warm-orange text-primary-foreground p-4 rounded-full shadow-retro animate-pulse-glow">
                  <ArrowRight className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="text-3xl font-bold text-chocolate-brown mb-4">
                From Disaster to Dream Door
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Don't let a broken garage door ruin your home's curb appeal and security. 
                Our expert team transforms even the most damaged doors into beautiful, 
                reliable entrances that add value to your property.
              </p>
            </div>

            {/* Transformation List */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-chocolate-brown">What We Fixed:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {transformations.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-retro-green flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-cream rounded-lg border-2 border-warm-orange/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-orange">2 Days</div>
                <div className="text-sm text-muted-foreground">Project Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-orange">$2,400</div>
                <div className="text-sm text-muted-foreground">Total Cost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warm-orange">+$5K</div>
                <div className="text-sm text-muted-foreground">Home Value</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button variant="retro" size="lg" className="w-full sm:w-auto">
                Transform Your Garage Door
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}