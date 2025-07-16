import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";

export function Footer() {
  const serviceAreas = [
    "Riverside", "Corona", "Moreno Valley", "Norco", "Jurupa Valley", "Eastvale"
  ];

  const quickLinks = [
    { label: "Garage Door Repair", href: "#repair" },
    { label: "Door Replacement", href: "#replacement" },
    { label: "Opener Installation", href: "#openers" },
    { label: "Emergency Service", href: "#emergency" },
    { label: "Free Estimates", href: "#estimate" },
    { label: "Maintenance Plans", href: "#maintenance" }
  ];

  return (
    <footer className="bg-chocolate-brown text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-retro font-black text-vintage-yellow mb-2">
                GARAGEPRO
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Your trusted garage door experts serving Riverside County for over 30 years. 
                Licensed, insured, and committed to quality service.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-vintage-yellow" />
                <span className="text-sm">BBB A+ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-vintage-yellow" />
                <span className="text-sm">Licensed & Insured</span>
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
                    className="text-primary-foreground/80 hover:text-vintage-yellow transition-colors text-sm"
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
                <li key={index} className="text-primary-foreground/80 text-sm">
                  {area}, CA
                </li>
              ))}
            </ul>
            <p className="text-xs text-primary-foreground/60 mt-4">
              Don't see your city? Call us - we may service your area!
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
                  <a href="tel:+15551234567" className="text-warm-orange hover:text-vintage-yellow transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-destructive mt-0.5 animate-pulse" />
                <div>
                  <p className="font-semibold text-sm">Emergency 24/7</p>
                  <a href="tel:+15559114367" className="text-destructive hover:text-vintage-yellow transition-colors">
                    (555) 911-DOOR
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-warm-orange mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <a href="mailto:info@garagedoorpro.com" className="text-warm-orange hover:text-vintage-yellow transition-colors text-sm">
                    info@garagedoorpro.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-warm-orange mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Business Hours</p>
                  <p className="text-xs text-primary-foreground/80">
                    Mon-Fri: 7AM-8PM<br />
                    Sat: 8AM-6PM<br />
                    Sun: 9AM-5PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-destructive text-destructive-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 animate-pulse" />
              <div>
                <p className="font-bold">24/7 Emergency Service Available</p>
                <p className="text-sm opacity-90">Garage door stuck? We'll get you moving!</p>
              </div>
            </div>
            <a 
              href="tel:+15559114367"
              className="bg-destructive-foreground text-destructive px-6 py-2 rounded-lg font-bold hover:bg-destructive-foreground/90 transition-colors"
            >
              Call Emergency Line
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-chocolate-brown/80 border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <div>
              <p>&copy; 2024 GaragePro Garage Door Services. All rights reserved.</p>
              <p>Licensed Contractor #123456 | Bonded & Insured</p>
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