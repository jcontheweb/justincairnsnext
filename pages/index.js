import dynamic from "next/dynamic";

const HeroSection = dynamic(import("../components/Sections/Hero"));
const AboutSection = dynamic(import('../components/Sections/About'))
const ServiceSection = dynamic(import('../components/Sections/Service'))
const TestimonialSection = dynamic(import('../components/Sections/Testimonials'))

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
    </div>
  );
}
