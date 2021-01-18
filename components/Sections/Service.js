import Link from "next/link";
import ServiceCard from "../ServiceCard/ServiceCard";
import services from "../../shared/services.data";

export default function ServiceSection() {
  return (
    <section className="relative z-10 py-16 bg-gray-50">
      <span id="technology" className="sr-only" style={{ top: "-79px" }}></span>
      <div className="max-w-5xl px-4 mx-auto md:px-8">
        <p className="text-center">What I can do for you</p>
        <h2 className="mt-1 text-4xl font-semibold tracking-tight text-center md:mt-2 md:text-5xl">
          Technologies
        </h2>
        <div className="inline-grid w-full mt-8 border-b border-l border-gray-200 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
