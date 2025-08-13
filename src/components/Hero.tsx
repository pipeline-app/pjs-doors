import { Button } from "@/components/ui/button";
import { Phone, Shield } from "lucide-react";

export default function Hero() {
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
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto items-center">
            
            {/* Left Column - Headline & CTA */}
            <div className="space-y-8 animate-slide-up">
              {/* Main Headline */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-roffene font-bold text-white leading-tight">
                  Need a new garage door?<br />
                  <span className="text-brand-orange">We'll get you one today.</span>
                </h2>
                <p className="text-xl lg:text-2xl text-white/90">
                  Same-day service available. Licensed & insured professionals ready to help.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-4 text-lg shadow-retro hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (555) 123-4567
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Free Estimate
                </Button>
              </div>
            </div>

            {/* Right Column - Embedded Form */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-retro animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div id="370d2cc7-714b-4a8d-8a4d-b638f64a558c"></div>
              <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
              <script src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" clienthub_id="370d2cc7-714b-4a8d-8a4d-b638f64a558c" form_url="https://clienthub.getjobber.com/client_hubs/370d2cc7-714b-4a8d-8a4d-b638f64a558c/public/work_request/embedded_work_request_form"></script>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}