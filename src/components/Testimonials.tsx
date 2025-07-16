import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Riverside, CA",
      rating: 5,
      text: "Our garage door spring broke on a Saturday morning and we couldn't get our cars out. Called these guys and they had someone here within 2 hours! Professional, fair pricing, and quality work. Highly recommend!",
      service: "Spring Repair"
    },
    {
      name: "Mike Rodriguez", 
      location: "Corona, CA",
      rating: 5,
      text: "Replaced our 20-year-old garage door with a beautiful new insulated model. The installation team was incredibly professional and the door looks amazing. Neighbors are already asking for their number!",
      service: "Door Replacement"
    },
    {
      name: "Jennifer Chen",
      location: "Moreno Valley, CA", 
      rating: 5,
      text: "Best garage door company in the area! They installed our smart opener and taught us how to use all the features. The warranty and follow-up service has been excellent. You won't find better service anywhere.",
      service: "Opener Installation"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "30+", label: "Years Experience" },
    { number: "4.9★", label: "Average Rating" },
    { number: "24/7", label: "Emergency Service" }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-retro font-black text-chocolate-brown mb-4">
            CUSTOMER
            <span className="text-warm-orange"> REVIEWS</span>
          </h2>
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-2 border-warm-orange/20 shadow-card hover:shadow-retro transition-all duration-300 bg-cream animate-slide-up"
              style={{ animationDelay: `${0.4 + (index * 0.2)}s` }}
            >
              {/* Decorative Quote */}
              <div className="absolute top-4 right-4 text-warm-orange/20">
                <Quote className="w-12 h-12" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-vintage-yellow text-vintage-yellow" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Customer Info */}
                <div className="border-t border-warm-orange/20 pt-4">
                  <div className="font-bold text-chocolate-brown">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground mb-2">{testimonial.location}</div>
                  <div className="inline-block px-2 py-1 bg-warm-orange/10 text-warm-orange text-xs rounded-full font-medium">
                    {testimonial.service}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="text-center p-6 bg-cream rounded-lg border-2 border-retro-green/20">
            <div className="text-3xl font-bold text-retro-green mb-2">BBB A+</div>
            <div className="text-sm text-muted-foreground">Better Business Bureau Rating</div>
          </div>
          <div className="text-center p-6 bg-cream rounded-lg border-2 border-warm-orange/20">
            <div className="text-3xl font-bold text-warm-orange mb-2">Licensed</div>
            <div className="text-sm text-muted-foreground">State Licensed & Insured</div>
          </div>
          <div className="text-center p-6 bg-cream rounded-lg border-2 border-vintage-yellow/20">
            <div className="text-3xl font-bold text-chocolate-brown mb-2">Warranty</div>
            <div className="text-sm text-muted-foreground">1 Year Service Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}