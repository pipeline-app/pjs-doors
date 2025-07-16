import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="gallery">
          <BeforeAfter />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="reviews">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
