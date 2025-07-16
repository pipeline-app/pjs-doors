import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, RotateCcw, Package, Clock, Phone, Shield } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Garage & Overhead Doors",
      description: "Residential and commercial door installation, repair and maintenance",
      features: ["Same-day service", "All brands serviced", "Parts warranty"],
      price: "Call for Quote"
    },
    {
      icon: RotateCcw,
      title: "Roll-Up & High Speed Doors",
      description: "Commercial roll-up doors and high-speed industrial door solutions",
      features: ["Commercial grade", "Professional installation", "Fast operation"],
      price: "Call for Quote"
    },
    {
      icon: Package,
      title: "Fire-Rated & Retractable Screens",
      description: "Specialized fire-rated doors and retractable screen installations",
      features: ["Safety certified", "Code compliant", "Custom solutions"],
      price: "Call for Quote"
    }
  ];

  const brands = [
    "Craftsman", "Chamberlain", "LiftMaster", "Genie", "Wayne Dalton", "Clopay"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-inter font-black text-chocolate-brown mb-4">
            OUR
            <span className="text-warm-orange"> SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional garage door solutions for every need and budget
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-2 border-warm-orange/20 shadow-card hover:shadow-retro transition-all duration-300 hover:scale-105 animate-slide-up bg-cream"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Retro Corner Design */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-vintage-yellow transform rotate-45 translate-x-8 -translate-y-8"></div>
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-cta rounded-full w-fit shadow-button">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-chocolate-brown">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-retro-green rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-warm-orange/20">
                  <div className="text-2xl font-bold text-warm-orange mb-3">{service.price}</div>
                  <Button variant="outline" className="w-full border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-primary-foreground">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Section */}
        <div className="bg-gradient-cta text-primary-foreground p-8 rounded-2xl shadow-retro mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Clock className="w-8 h-8 animate-pulse" />
                24/7 Emergency Service
              </h3>
              <p className="text-lg opacity-90 mb-4">
                Garage door stuck or broken? Don't wait! Our emergency team is ready to help 
                any time of day or night. Fast response, professional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="emergency" size="lg">
                  <Phone className="w-5 h-5" />
                  Call 765.377.1000
                </Button>
                <div className="text-center sm:text-left">
                  <div className="text-sm opacity-80">Schedule Today:</div>
                  <div className="text-xl font-bold">765.377.1000</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black mb-2">24/7</div>
              <div className="text-xl">Available</div>
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-chocolate-brown mb-8">Brands We Service</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-cream border-2 border-warm-orange/20 rounded-lg font-semibold text-chocolate-brown hover:bg-warm-orange hover:text-primary-foreground transition-all duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            Don't see your brand? <span className="text-warm-orange font-semibold">Call us anyway!</span> We service all major garage door brands.
          </p>
        </div>
      </div>
    </section>
  );
}