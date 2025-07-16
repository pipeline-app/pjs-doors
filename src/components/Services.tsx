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
    { name: "Craftsman", logo: craftsmanLogo },
    { name: "Chamberlain", logo: chamberlainLogo },
    { name: "LiftMaster", logo: liftmasterLogo },
    { name: "Genie", logo: genieLogo },
    { name: "Wayne Dalton", logo: wayneDaltonLogo },
    { name: "Clopay", logo: clopayLogo }
  ];

  const galleryImages = [
    { src: garageDoor1, alt: "Modern residential garage door with white sectional panels" },
    { src: garageDoor2, alt: "Traditional carriage house garage door with dark wood finish" },
    { src: garageDoor3, alt: "Contemporary garage door with glass panels and aluminum frame" },
    { src: garageDoor4, alt: "Rustic garage door with natural wood planks" },
    { src: garageDoor5, alt: "Industrial roll-up garage door for commercial use" },
    { src: garageDoor6, alt: "Classic raised panel garage door in beige color" }
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

        {/* Garage Door Gallery */}
        <div className="text-foreground p-8 rounded-2xl mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-chocolate-brown">
              Our Garage Door Gallery
            </h3>
            <p className="text-lg text-muted-foreground">
              Explore our stunning collection of garage doors for every style and need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm font-medium px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-chocolate-brown mb-8">Brands We Service</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="px-6 py-4 hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[100px]"
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="max-h-20 max-w-48 object-contain"
                />
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