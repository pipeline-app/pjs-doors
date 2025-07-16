import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";

export function Footer() {
  const serviceAreas = [
    "Indiana", "Lafayette", "West Lafayette", "Kokomo", "Frankfort", "Lebanon"
  ];

  const quickLinks = [
    { label: "Garage Doors", href: "#garage" },
    { label: "Overhead Doors", href: "#overhead" },
    { label: "Roll-Up Doors", href: "#rollup" },
    { label: "High Speed Doors", href: "#highspeed" },
    { label: "Fire-Rated Doors", href: "#firerated" },
    { label: "Retractable Screens", href: "#screens" }
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: '#0D3441' }}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-retro font-black text-vintage-yellow mb-2">
                PJ'S DOORS
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Family owned garage door company serving Indiana and surrounding areas. 
                We handle residential & commercial install, repair & maintenance.
                Licensed, insured, and focused on quality & customer service.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-vintage-yellow" />
                <span className="text-sm">BBB A+ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-vintage-yellow" />
                <span className="text-sm">We Answer The Phone!</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-vintage-yellow" />
                <span className="text-sm">1 Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-vintage-yellow mb-4">Our Services</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-vintage-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold text-vintage-yellow mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-white/80 text-sm">
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/60 mt-4">
              Call us to see if we service your area!
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-vintage-yellow mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-warm-orange mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Main Line</p>
                  <a href="tel:+17653771000" className="text-warm-orange hover:text-vintage-yellow transition-colors">
                    765.377.1000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-warm-orange mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Schedule Today</p>
                  <a href="tel:+17653771000" className="text-warm-orange hover:text-vintage-yellow transition-colors">
                    765.377.1000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-warm-orange mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <a href="mailto:info@pjsdoors.com" className="text-warm-orange hover:text-vintage-yellow transition-colors text-sm">
                    info@pjsdoors.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-warm-orange mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Business Hours</p>
                  <p className="text-xs text-white/80">
                    Mon-Fri: 8AM-5PM<br />
                    Saturday: 8AM-12PM<br />
                    Sunday: By Appointment<br />
                    <span className="text-warm-orange font-medium">Call for Service!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6" style={{ backgroundColor: '#0D3441' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div>
              <p>&copy; 2024 PJ's Doors. All rights reserved.</p>
              <p>Licensed & Insured | Family Owned & Operated</p>
            </div>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-vintage-yellow transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-vintage-yellow transition-colors">Terms of Service</a>
              <a href="#warranty" className="hover:text-vintage-yellow transition-colors">Warranty Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}