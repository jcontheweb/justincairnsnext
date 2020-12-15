import AboutTabs from '../AboutTabs/AboutTabs'

export default function AboutSection() {
  return (
    <section
      style={{ marginTop: "100vh" }}
      className="bg-white z-10 relative py-8 md:py-0 md:pt-16 flex items-center"
    >
      <span id="about" className="sr-only" style={{ top: "-79px" }}></span>
      <div className="max-w-5xl w-full mx-auto px-4 md:px-8">
        <AboutTabs />
      </div>
    </section>
  );
}
