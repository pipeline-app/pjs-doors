import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactBackground from "@/assets/contact-background.jpg";

export function Contact() {
  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contactBackground})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#112329]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <SectionHeading 
            firstWord="GET YOUR"
            secondWord="FREE ESTIMATE"
            firstWordColor="white"
            secondWordColor="orange"
          />
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to fix or upgrade your garage door? Contact us today for a free, no-obligation estimate
          </p>
        </div>

        {/* Centered Form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 bg-transparent border-4 border-white animate-slide-up">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Get Your Free Estimate
              </h3>
              <p className="text-white/90">
                Fill out the form and we'll contact you within 24 hours
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="text-white font-medium block mb-2">
                  Your Name *
                </label>
                <Input type="text" placeholder="Enter your full name" className="mt-1" />
              </div>

              <div>
                <label className="text-white font-medium block mb-2">
                  Phone Number *
                </label>
                <Input type="tel" placeholder="(555) 123-4567" className="mt-1" />
              </div>

              <div>
                <label className="text-white font-medium block mb-2">
                  Service Details
                </label>
                <Textarea placeholder="Describe your garage door issue or service needs..." className="mt-1 min-h-[100px]" />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg font-bold bg-brand-orange hover:bg-brand-orange/90 text-white">
                Get FREE Estimate Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}