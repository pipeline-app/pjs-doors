import { SectionHeading } from "@/components/ui/section-heading";
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

            <div>
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