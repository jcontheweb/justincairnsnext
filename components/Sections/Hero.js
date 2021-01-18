import { useEffect, useRef, useState } from "react";

import PrimaryButton from "../Buttons/PrimaryButton";
import DownloadButton from "../Buttons/DownloadButton";
import HireButton from "../Buttons/HireButton";

export default function HeroSection() {
  const heroRef = useRef();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        const heroHeight = heroRef.current && heroRef.current.scrollHeight;
        const pageScrolled = window.pageYOffset;
        setOpacity((pageScrolled / heroHeight) * 1.5);
      },
      { passive: true }
    );
  }, []);
  return (
    <section
      ref={heroRef}
      style={{ opacity: 1 - opacity, transform: `scale(${1 - opacity / 5})` }}
      className="fixed inset-0 flex items-center w-full h-screen max-w-5xl px-4 mx-auto lg:h-half md:px-8"
    >
      <div className="relative z-10 flex">
        <div className="md:max-w-lg">
          <p className="text-lg font-medium leading-none text-gray-600 uppercase">
            Hello! I'M
          </p>
          <h1 className="mt-2 text-5xl font-bold leading-none tracking-tight capitalize md:text-6xl">
            justin cairns
          </h1>
          <p className="text-2xl font-medium leading-none text-gray-600">
            Full Stack Web Developer
          </p>
          <p className="mt-4 leading-5 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            quibusdam ad totam blanditiis nostrum eligendi quos, veritatis velit
          </p>
          <div className="mt-6 md:flex md:mt-10">
            <div className="mb-4 md:mb-0 md:mr-4">
              <HireButton />
            </div>
            <div>
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-10 lg:opacity-50 w-135 sm:w-full lg:top-auto lg:left-auto lg:bottom-0 lg:right-hero lg:max-w-lg">
        <div className="relative flex items-end h-screen max-w-3xl mx-auto lg:h-half lg:items-center animate-bounce lg:pt-24">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </section>
  );
}
