import { useContext } from 'react'
import dynamic from "next/dynamic";
import { ContactFormContext } from '../context/contact-form/ContactFormState'

const HeroSection = dynamic(import("../components/Sections/Hero"));
const AboutSection = dynamic(import('../components/Sections/About'))
const ServiceSection = dynamic(import('../components/Sections/Service'))
const TestimonialSection = dynamic(import('../components/Sections/Testimonials'))
const ContactForm = dynamic(import('../components/ContactForm'))

export default function Home() {
  const { expanded } = useContext(ContactFormContext)
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      {/* <TestimonialSection /> */}
      {expanded && <ContactForm />}
    </div>
  );
}
