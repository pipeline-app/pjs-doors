import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import contactBackground from "@/assets/contact-background.jpg";

export function Contact() {
  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contactBackground})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-inter font-black text-white mb-4">
            GET YOUR
            <span className="text-warm-orange"> FREE ESTIMATE</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to fix or upgrade your garage door? Contact us today for a free, no-obligation estimate
          </p>
        </div>

        {/* Centered Form */}
        <div className="max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}