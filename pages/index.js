import HeroSection from "../components/Sections/Hero";
import AboutSection from "../components/Sections/About";
import ServiceSection from "../components/Sections/Service";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      {/* <div className="bg-black py-32 relative overflow-hidden">

      </div> */}
      {/* <section id="portfolio" className="h-screen"></section>
      <section id="testimonial" className="h-screen"></section> */}
    </div>
  );
}
