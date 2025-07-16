import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Upload } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-retro font-black text-chocolate-brown mb-4">
            GET YOUR
            <span className="text-warm-orange"> FREE ESTIMATE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to fix or upgrade your garage door? Contact us today for a free, no-obligation estimate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-warm-orange/20 shadow-card bg-cream animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-chocolate-brown">Request Your Free Estimate</CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 1 hour</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-chocolate-brown mb-2">First Name *</label>
                  <Input placeholder="John" className="border-warm-orange/30 focus:border-warm-orange" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-chocolate-brown mb-2">Last Name *</label>
                  <Input placeholder="Smith" className="border-warm-orange/30 focus:border-warm-orange" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-chocolate-brown mb-2">Phone Number *</label>
                  <Input placeholder="(555) 123-4567" className="border-warm-orange/30 focus:border-warm-orange" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-chocolate-brown mb-2">Email</label>
                  <Input placeholder="john@email.com" className="border-warm-orange/30 focus:border-warm-orange" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-chocolate-brown mb-2">Service Address *</label>
                <Input placeholder="123 Main St, Your City, CA 12345" className="border-warm-orange/30 focus:border-warm-orange" />
              </div>

              <div>
                <label className="block text-sm font-medium text-chocolate-brown mb-2">Service Needed *</label>
                <Select>
                  <SelectTrigger className="border-warm-orange/30 focus:border-warm-orange">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="repair">Garage Door Repair</SelectItem>
                    <SelectItem value="replacement">Door Replacement</SelectItem>
                    <SelectItem value="opener">Opener Installation</SelectItem>
                    <SelectItem value="maintenance">Maintenance Service</SelectItem>
                    <SelectItem value="emergency">Emergency Repair</SelectItem>
                    <SelectItem value="estimate">General Estimate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-chocolate-brown mb-2">Describe Your Issue</label>
                <Textarea 
                  placeholder="Tell us about your garage door problem or what you're looking for..."
                  rows={4}
                  className="border-warm-orange/30 focus:border-warm-orange"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-chocolate-brown mb-2">Upload Photos (Optional)</label>
                <div className="border-2 border-dashed border-warm-orange/30 rounded-lg p-6 text-center hover:border-warm-orange/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Click to upload photos of your garage door</p>
                  <p className="text-xs text-muted-foreground mt-1">Helps us provide more accurate estimates</p>
                </div>
              </div>

              <Button variant="retro" className="w-full text-lg py-6">
                Get My Free Estimate
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to receive text messages and calls from our team. 
                Message and data rates may apply.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info & Emergency */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* Emergency Contact */}
            <Card className="border-2 border-destructive/20 shadow-card bg-gradient-to-r from-destructive/5 to-destructive/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-destructive flex items-center gap-3">
                  <Phone className="w-6 h-6 animate-pulse" />
                  Emergency Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Garage door emergency? Don't wait - call our 24/7 emergency line now!
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:+15559114367" 
                    className="block text-center p-4 bg-destructive text-destructive-foreground rounded-lg font-bold text-xl hover:bg-destructive/90 transition-colors"
                  >
                    (555) 911-DOOR
                  </a>
                  <p className="text-sm text-muted-foreground text-center">
                    Available 24/7 for emergency repairs
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Regular Contact */}
            <Card className="border-2 border-warm-orange/20 shadow-card bg-cream">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-chocolate-brown">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-warm-orange mt-1" />
                  <div>
                    <p className="font-semibold text-chocolate-brown">Main Phone</p>
                    <a href="tel:+15551234567" className="text-warm-orange hover:underline">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-warm-orange mt-1" />
                  <div>
                    <p className="font-semibold text-chocolate-brown">Email</p>
                    <a href="mailto:info@garagedoorpro.com" className="text-warm-orange hover:underline">
                      info@garagedoorpro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-warm-orange mt-1" />
                  <div>
                    <p className="font-semibold text-chocolate-brown">Service Area</p>
                    <p className="text-muted-foreground">
                      Riverside County, CA<br />
                      Corona • Riverside • Moreno Valley<br />
                      Norco • Jurupa Valley
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-warm-orange mt-1" />
                  <div>
                    <p className="font-semibold text-chocolate-brown">Business Hours</p>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: 9:00 AM - 5:00 PM</p>
                      <p className="text-destructive font-medium">Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <div className="bg-gradient-cta text-primary-foreground p-6 rounded-lg shadow-retro">
              <h3 className="text-xl font-bold mb-3">Our Response Promise</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vintage-yellow rounded-full"></div>
                  Estimates returned within 1 hour
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vintage-yellow rounded-full"></div>
                  Same-day service available
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vintage-yellow rounded-full"></div>
                  Emergency response in 2 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vintage-yellow rounded-full"></div>
                  No hidden fees or surprise charges
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}