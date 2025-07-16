import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Shield } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  notes: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export function Hero() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your service."
    });
    reset();
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/bae767a5-7917-4b08-be62-7e6aacbee251.png" 
          alt="Beautiful twilight house with prominent garage door"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 w-full items-center">
            
            {/* Left Column - Headline & CTA */}
            <div className="space-y-8 animate-slide-up">
              {/* Small Branding */}
              <div className="inline-block">
                <h1 className="text-3xl lg:text-4xl font-retro font-black text-white">
                  PJ'S <span className="text-vintage-yellow">DOORS</span>
                </h1>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Broken Garage Door?<br />
                  <span className="text-vintage-yellow">We'll Fix It Today!</span>
                </h2>
                <p className="text-xl lg:text-2xl text-white/90">
                  Same-day service available. Licensed & insured professionals ready to help.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold text-white">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Phone className="w-5 h-5 text-vintage-yellow" />
                  <a 
                    href="tel:+17653771000" 
                    className="font-bold text-white hover:text-vintage-yellow transition-colors"
                  >
                    765.377.1000
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get Your Free Estimate
                  </h3>
                  <p className="text-white/90">
                    Fill out the form and we'll contact you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white font-medium">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="mt-1"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="mt-1"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="notes" className="text-white font-medium">
                      Service Details
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Describe your garage door issue or service needs..."
                      className="mt-1 min-h-[100px]"
                      {...register("notes")}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg font-bold bg-vintage-yellow hover:bg-vintage-yellow/90 text-black"
                  >
                    Get FREE Estimate Now
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}