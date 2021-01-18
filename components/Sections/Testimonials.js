import { useRef } from "react";

export default function TestimonialSection() {
  const list = useRef();
  return (
    <section className="relative z-10 py-16 overflow-hidden bg-white">
      <div className="w-full max-w-5xl px-4 mx-auto md:px-8">
        <p className="text-center">What my clients have to say</p>
        <h2 className="mt-1 text-4xl font-semibold tracking-tight text-center md:mt-2 md:text-5xl">
          Feedback
        </h2>
      </div>
      <div className="relative mt-10" style={{ height: "168px" }}>
        <div
          ref={list}
          className="flex px-4 mx-auto testimonials-list md:pr-24"
        >
          <div className="flex-shrink-0 hidden w-full max-w-md p-8 mb-10 mr-8 xl:flex"></div>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div className="flex-shrink-0 w-full max-w-lg pr-4 lg:pr-8">
              <div className="relative flex p-8 text-white bg-black rounded-md shadow-md">
                <img
                  className="flex-shrink-0 w-20 h-20 mr-6 overflow-hidden rounded-full"
                  src="https://randomuser.me/api/portraits/women/95.jpg"
                  alt=""
                />

                <div>
                  <p className="text-2xl leading-none font-quote">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, omnis."
                  </p>
                  <a
                    className="inline-block mt-2"
                    href="https://test.elitefourstates.com"
                    target="__blank"
                  >
                    elitefourstates.com
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
