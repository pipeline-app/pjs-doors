import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, RotateCcw, Package, Clock, Phone, Shield } from "lucide-react";

// Import brand logos
import craftsmanLogo from "/lovable-uploads/fdf19fbb-2ae0-4864-9a18-9f361b823626.png";
import chamberlainLogo from "@/assets/logos/chamberlain-logo.png";
import liftmasterLogo from "/lovable-uploads/3a28feae-3315-4466-9b8a-9ff6597ea151.png";
import genieLogo from "@/assets/logos/genie-logo.png";
import wayneDaltonLogo from "@/assets/logos/wayne-dalton-logo.png";
import clopayLogo from "@/assets/logos/clopay-logo.png";

// Import gallery images
import garageDoor1 from "@/assets/gallery/garage-door-1.jpg";
import garageDoor2 from "@/assets/gallery/garage-door-2.jpg";
import garageDoor3 from "@/assets/gallery/garage-door-3.jpg";
import garageDoor4 from "@/assets/gallery/garage-door-4.jpg";
import garageDoor5 from "@/assets/gallery/garage-door-5.jpg";
import garageDoor6 from "@/assets/gallery/garage-door-6.jpg";

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Garage Door Repair",
      description: "Professional repairs for all types and brands",
      features: [
        "24/7 Emergency Service",
        "Spring Replacement",
        "Panel & Hardware Repair",
        "Track & Roller Issues"
      ],
      price: "Starting at $89"
    },
    {
      icon: RotateCcw,
      title: "Door Replacement",
      description: "Complete garage door replacement service",
      features: [
        "Premium Quality Doors",
        "Professional Installation", 
        "Full Warranty Coverage",
        "Free Estimate & Consultation"
      ],
      price: "Starting at $599"
    },
    {
      icon: Package,
      title: "Opener Installation",
      description: "Install new garage door openers",
      features: [
        "Smart & WiFi Enabled",
        "Belt & Chain Drive Options",
        "Safety Feature Installation",
        "Remote Programming"
      ],
      price: "Starting at $299"
    },
    {
      icon: Clock,
      title: "Maintenance Service",
      description: "Keep your garage door running smoothly",
      features: [
        "Annual Tune-Up",
        "Lubrication Service",
        "Safety Inspection",
        "Weather Seal Replacement"
      ],
      price: "Starting at $129"
    },
    {
      icon: Phone,
      title: "Emergency Repair",
      description: "24/7 emergency garage door service",
      features: [
        "Same-Day Service",
        "24/7 Availability",
        "Emergency Spring Repair",
        "Broken Door Recovery"
      ],
      price: "Starting at $149"
    },
    {
      icon: Shield,
      title: "Commercial Services", 
      description: "Professional commercial door solutions",
      features: [
        "Roll-Up Door Service",
        "High-Speed Doors",
        "Fire-Rated Doors",
        "Commercial Maintenance"
      ],
      price: "Call for Quote"
    }
  ];

  const brands = [
    { name: "Craftsman", logo: craftsmanLogo },
    { name: "Chamberlain", logo: chamberlainLogo },
    { name: "LiftMaster", logo: liftmasterLogo },
    { name: "Genie", logo: genieLogo },
    { name: "Wayne Dalton", logo: wayneDaltonLogo },
    { name: "Clopay", logo: clopayLogo }
  ];

  const galleryImages = [
    { src: garageDoor1, alt: "Modern sectional garage door in white" },
    { src: garageDoor2, alt: "Traditional carriage style garage door" },
    { src: garageDoor3, alt: "Contemporary garage door with windows" },
    { src: garageDoor4, alt: "Wooden garage door with decorative hardware" },
    { src: garageDoor5, alt: "Industrial roll-up garage door for commercial use" },
    { src: garageDoor6, alt: "Classic raised panel garage door in beige color" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <SectionHeading 
            firstWord="OUR"
            secondWord="SERVICES"
            firstWordColor="dark"
            secondWordColor="orange"
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional garage door solutions for every need and budget
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        {/* Garage Door Gallery */}
        <div className="text-foreground p-8 rounded-2xl mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-chocolate-brown mb-4">Our Work Gallery</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of recent garage door installations and repairs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden border-2 border-warm-orange/20 hover:border-warm-orange/40 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Brand Partners */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-chocolate-brown mb-8">Trusted Brand Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-cream border border-warm-orange/20 hover:border-warm-orange/40 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}