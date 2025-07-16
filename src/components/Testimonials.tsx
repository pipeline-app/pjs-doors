import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
// Using uploaded truck character image

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Miller",
      location: "Lafayette, IN",
      rating: 5,
      text: "PJ's Doors was fantastic! They installed our new garage door quickly and professionally. The team was courteous and cleaned up everything perfectly. Our new door looks amazing and works flawlessly!",
      service: "Door Installation"
    },
    {
      name: "Mike Thompson", 
      location: "West Lafayette, IN",
      rating: 5,
      text: "Called PJ's when our commercial overhead door got stuck. They came out the same day and had it fixed in no time. Great service, fair pricing, and they really know their stuff. Highly recommend!",
      service: "Overhead Door Repair"
    },
    {
      name: "Jennifer Davis",
      location: "Kokomo, IN", 
      rating: 5,
      text: "Family owned business that really cares about their customers. They installed a high-speed door for our warehouse and the difference in efficiency is incredible. Professional from start to finish!",
      service: "High-Speed Door"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "Family", label: "Owned Business" },
    { number: "4.9★", label: "Average Rating" },
    { number: "Licensed", label: "& Insured" }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <SectionHeading 
            firstWord="CUSTOMER"
            secondWord="REVIEWS"
            firstWordColor="dark"
            secondWordColor="orange"
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-warm-orange mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Character Column */}
          <div className="text-center lg:text-left animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src="/lovable-uploads/fdf19fbb-2ae0-4864-9a18-9f361b823626.png" 
              alt="PJ's Doors Service Truck Character" 
              className="w-64 h-auto mx-auto lg:mx-0 mb-6"
            />
            <div className="space-y-4">
              <h3 className="text-3xl font-roffene font-black text-chocolate-brown">
                Ready to <span className="text-warm-orange">ROLL!</span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our team is always ready to help with your garage door needs. 
                From emergency repairs to new installations - we've got you covered!
              </p>
              <div className="inline-block px-6 py-3 bg-warm-orange text-white rounded-full font-bold hover:bg-warm-orange/90 transition-colors">
                Call Us Today!
              </div>
            </div>
          </div>

          {/* Testimonials Column */}
          <div className="grid gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden shadow-card hover:shadow-retro transition-all duration-300 bg-cream animate-slide-up"
                style={{ animationDelay: `${0.6 + (index * 0.2)}s` }}
              >
                {/* Decorative Quote */}
                <div className="absolute top-4 right-4 text-warm-orange/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                <CardContent className="p-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-vintage-yellow text-vintage-yellow" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-foreground mb-4 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="border-t border-warm-orange/20 pt-3">
                    <div className="font-bold text-chocolate-brown text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground mb-2">{testimonial.location}</div>
                    <div className="inline-block px-2 py-1 bg-warm-orange/10 text-warm-orange text-xs rounded-full font-medium">
                      {testimonial.service}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}