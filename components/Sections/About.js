import AboutTabs from '../AboutTabs/AboutTabs'

export default function AboutSection() {
  return (
    <section
      className="relative z-10 flex items-center py-8 bg-white mt-screen lg:mt-half md:py-16"
    >
      <span id="about" className="sr-only" style={{ top: "-79px" }}></span>
      <div className="w-full max-w-5xl px-4 mx-auto md:px-8">
        <AboutTabs />
      </div>
    </section>
  );
}
