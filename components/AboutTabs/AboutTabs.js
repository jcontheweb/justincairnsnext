import { useState } from "react";

import Intro from "./intro";
import ExpertArea from "./expert-area";
import Experience from "./experience";

export default function AboutTabs() {
  const [tab, setTab] = useState("Intro");
  const getTab = () => {
    switch (tab) {
      case "Intro":
        return <Intro />;
        break;
      case "ExpertArea":
        return <ExpertArea />;
        break;
      case "Experience":
        return <Experience />;
        break;
      default:
        return <Intro />;
    }
  };
  return (
    <>
      <div className="max-w-2xl mx-auto flex md:text-lg text-gray-600">
        <button
          onClick={() => setTab("Intro")}
          className={`${
            tab == "Intro" ? "opacity-100 font-semibold border-gray-600" : "opacity-75"
          } transition-all duration-100 flex-1 border-b-2 py-2 md:py-4 focus:outline-none focus:ring-2`}
        >
          Intro.
        </button>
        <button
          onClick={() => setTab("ExpertArea")}
          className={`${
            tab == "ExpertArea" ? "opacity-100 font-semibold border-gray-600" : "opacity-75"
          } transition-all duration-100 flex-1 border-b-2 py-2 md:py-4 focus:outline-none focus:ring-2`}
        >
          Expert Area
        </button>
        <button
          onClick={() => setTab("Experience")}
          className={`${
            tab == "Experience" ? "opacity-100 font-semibold border-gray-600" : "opacity-75"
          } transition-all duration-100 flex-1 border-b-2 py-2 md:py-4 focus:outline-none focus:ring-2`}
        >
          Experience
        </button>
      </div>
      <div className="flex mt-8 md:mt-16">
        <div className="hidden md:block" data-aos="fade-right">
          <img src="/me.png" alt="" />
        </div>
        <div data-aos="fade-up" className="flex-1 md:ml-16 text-black">{getTab()}</div>
      </div>
    </>
  );
}
