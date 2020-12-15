import Link from 'next/link'

export default function ServiceSection() {
  return (
    <section className="z-10 relative bg-gray-50 py-16 lg:py-24">
      <a href="javascript:void(0)" id="services" className="sr-only" style={{ top: "-79px" }}></a>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <p className="text-center">What I can do for you</p>
        <h2 className="font-semibold tracking-tight mt-1 md:mt-2 text-4xl md:text-5xl text-center">
          Exclusive Services
        </h2>
        <div className="mt-8 md:mt-16 inline-grid md:grid-cols-2 lg:grid-cols-3 border-b border-l border-gray-200 w-full">
          <Link href="/">
            <a className="p-8 bg-white relative group flex flex-col items-start justify-between border-t border-r border-gray-200 transition-all duration-200 hover:shadow-xl hover:z-10 shadow-none relative h-64">
              <div>
                <p className="font-semibold tracking-tight">UI UX Research</p>
                <p className="mt-4 leading-5">
                  4 years of proven experience working in the IT industry field
                  and a proven history of creating top-notch UI designs.
                </p>
              </div>
              {/* <span className="font-medium leading-none transition-all duration-200 text-sm border-b-2 border-transparent group-hover:border-black">
                Read More
              </span> */}
              <span className="font-medium leading-0 group-hover:bg-black group-hover:text-white transition-all duration-200 rounded-full border border-black px-3 py-1 text-sm">Read More</span>
              <div className="absolute right-0 bottom-0 p-3 group-hover:opacity-50 opacity-0 transition-all duration-200">
                <img className="w-24" src="/dots.svg" alt="" />
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className="p-8 bg-white relative group flex flex-col items-start justify-between border-t border-r border-gray-200 transition-all duration-200 hover:shadow-xl hover:z-10 shadow-none relative h-64">
              <div>
                <p className="font-semibold tracking-tight">Digital Marketing</p>
                <p className="mt-4 leading-5">
                  4 years of proven experience working in the IT industry field
                  and a proven history of creating top-notch UI designs.
                </p>
              </div>
              <span className="font-medium leading-none transition-all duration-200 text-sm border-b-2 border-transparent group-hover:border-black">
                Read More
              </span>
              <div className="absolute right-0 bottom-0 p-3 group-hover:opacity-50 opacity-0 transition-all duration-200">
                <img className="w-24" src="/dots.svg" alt="" />
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className="p-8 bg-white relative group flex flex-col items-start justify-between border-t border-r border-gray-200 transition-all duration-200 hover:shadow-xl hover:z-10 shadow-none relative h-64">
              <div>
                <p className="font-semibold tracking-tight">Wireframing Task</p>
                <p className="mt-4 leading-5">
                  4 years of proven experience working in the IT industry field
                  and a proven history of creating top-notch UI designs.
                </p>
              </div>
              <span className="font-medium leading-none transition-all duration-200 text-sm border-b-2 border-transparent group-hover:border-black">
                Read More
              </span>
              <div className="absolute right-0 bottom-0 p-3 group-hover:opacity-50 opacity-0 transition-all duration-200">
                <img className="w-24" src="/dots.svg" alt="" />
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className="p-8 bg-white relative group flex flex-col items-start justify-between border-t border-r border-gray-200 transition-all duration-200 hover:shadow-xl hover:z-10 shadow-none relative h-64">
              <div>
                <p className="font-semibold tracking-tight">Brand Identity</p>
                <p className="mt-4 leading-5">
                  4 years of proven experience working in the IT industry field
                  and a proven history of creating top-notch UI designs.
                </p>
              </div>
              <span className="font-medium leading-none transition-all duration-200 text-sm border-b-2 border-transparent group-hover:border-black">
                Read More
              </span>
              <div className="absolute right-0 bottom-0 p-3 group-hover:opacity-50 opacity-0 transition-all duration-200">
                <img className="w-24" src="/dots.svg" alt="" />
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className="p-8 bg-white relative group flex flex-col items-start justify-between border-t border-r border-gray-200 transition-all duration-200 hover:shadow-xl hover:z-10 shadow-none relative h-64">
              <div>
                <p className="font-semibold tracking-tight">Product Design</p>
                <p className="mt-4 leading-5">
                  4 years of proven experience working in the IT industry field
                  and a proven history of creating top-notch UI designs.
                </p>
              </div>
              <span className="font-medium leading-none transition-all duration-200 text-sm border-b-2 border-transparent group-hover:border-black">
                Read More
              </span>
              <div className="absolute right-0 bottom-0 p-3 group-hover:opacity-50 opacity-0 transition-all duration-200">
                <img className="w-24" src="/dots.svg" alt="" />
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className="p-8 bg-white relative group flex flex-col items-start justify-between border-t border-r border-gray-200 transition-all duration-200 hover:shadow-xl hover:z-10 shadow-none relative h-64">
              <div>
                <p className="font-semibold tracking-tight">Motion Graphics</p>
                <p className="mt-4 leading-5">
                  4 years of proven experience working in the IT industry field
                  and a proven history of creating top-notch UI designs.
                </p>
              </div>
              <span className="font-medium leading-none transition-all duration-200 text-sm border-b-2 border-transparent group-hover:border-black">
                Read More
              </span>
              <div className="absolute right-0 bottom-0 p-3 group-hover:opacity-50 opacity-0 transition-all duration-200">
                <img className="w-24" src="/dots.svg" alt="" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
