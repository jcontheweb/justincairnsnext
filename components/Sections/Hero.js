import { useEffect, useRef, useState } from "react";

import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

export default function HeroSection() {
  const heroRef = useRef();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const heroHeight = heroRef.current.scrollHeight;
      const pageScrolled = window.pageYOffset;
      setOpacity((pageScrolled / heroHeight) * 1.5);
    }, { passive: true});
  }, []);
  return (
    <section
      ref={heroRef}
      style={{ opacity: 1 - opacity, transform: `scale(${1 - opacity / 5})` }}
      className="fixed inset-0 h-screen max-w-5xl px-4 md:px-8 mx-auto w-full flex items-center"
    >
      <div data-aos="fade-up" className="md:max-w-lg relative z-10">
        <p className="text-gray-600 font-medium text-xl uppercase tracking-tight leading-none">
          Hello! I'M
        </p>
        <h1 className="text-5xl md:text-6xl font-bold capitalize tracking-tight leading-none mt-2">
          justin cairns
        </h1>
        <p className="text-gray-600 font-medium text-2xl leading-none">
          Full Stack Web Developer
        </p>
        <p className="text-gray-400 mt-4 leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          quibusdam ad totam blanditiis nostrum eligendi quos, veritatis velit
        </p>
        <div className="md:flex mt-6 md:mt-10">
          <div className="mb-4 md:mb-0 md:mr-4">
            <PrimaryButton size="xl">Hire Me</PrimaryButton>
          </div>
          <div>
            <SecondaryButton size="md">Download CV</SecondaryButton>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="w-135 sm:w-full absolute inset-0 lg:top-auto lg:left-auto lg:bottom-0 lg:right-hero lg:max-w-2xl">
        <img className="w-full opacity-25 lg:opacity-100" src="/me2.png" alt="" />
      </div>
    </section>
  );
}
