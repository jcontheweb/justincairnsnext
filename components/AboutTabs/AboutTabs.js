import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import tabs from "./tabs.data";
import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'

export default function AboutTabs() {
  const tabRef = useRef();
  const [tab, setTab] = useState(tabs[0]);

  useEffect(() => {
    tabRef.current.addEventListener(
      "touchstart",
      handleTouchStart,
      { passive: true },
      false
    );
    tabRef.current.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: true },
      false
    );
  }, []);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return evt.touches;
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setTab((prevTab) => {
          if (tabs.indexOf(prevTab) > 0) {
            return tabs[tabs.indexOf(prevTab) - 1];
          } else {
            return prevTab;
          }
        });
      } else {
        /* right swipe */
        setTab((prevTab) => {
          if (tabs.indexOf(prevTab) < tabs.length - 1) {
            return tabs[tabs.indexOf(prevTab) + 1];
          } else {
            return prevTab;
          }
        });
      }
    }

    /* reset values */
    xDown = null;
    yDown = null;
  }
  return (
    <>
      <div className="flex max-w-2xl mx-auto text-gray-600 md:text-lg">
        {tabs.map((item, index) => (
          <button
            key={index}
            className={`${
              tab == item
                ? "opacity-100 font-semibold border-gray-600"
                : ""
            } transition-all duration-100 flex-1 border-b-2 py-2 md:py-4 focus:outline-none focus:ring-2`}
            onClick={() => setTab(item)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex w-full max-w-2xl mx-auto mt-4 md:mt-8">
        {/* <div
          className="relative hidden md:block"
          style={{ height: "395px", width: "305px" }}
          data-aos="fade-right"
        >
          <Image
            src="/me.png"
            quality={100}
            lazy="true"
            layout="fill"
            className="object-cover"
            alt="another image of justin cairns"
          />
        </div> */}
        <div
          ref={tabRef}
          data-aos="fade-up"
          className="flex-1 text-black"
        >
          {tab.component}
          <div className="mt-8 md:flex">
            <div className="mb-4 md:mb-0 md:mr-4">
              <PrimaryButton href="/" size="xl">Hire Me</PrimaryButton>
            </div>
            <div>
              <SecondaryButton href="/" size="md">Download CV</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
