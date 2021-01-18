import Link from "next/link";

export default function ServiceCard({ title, description, image }) {
  return (
    <Link href="/">
      <a className="relative flex flex-col items-start justify-between p-8 overflow-hidden transition-all duration-200 bg-white border-t border-r border-gray-200 opacity-100 hover:bg-opacity-80 group">
         <img className="absolute top-0 right-0 w-16 pt-2 pr-2 mb-4 transition duration-200 opacity-10 group-hover:opacity-75" src={image} alt=""/>   
        <div>
          <p className="font-semibold tracking-tight">{title}</p>
          {/* <p className="mt-4 leading-5">{description}</p> */}
        </div>
        {/* <span className="px-3 py-1 mt-6 text-sm font-medium transition-all duration-200 border border-black leading-0 group-hover:bg-black group-hover:text-white">
          Read More
        </span> */}
        <div style={{bottom: "-20px"}} className="absolute inset-x-0 flex justify-center p-3 transition-all duration-200 opacity-0 group-hover:opacity-50">
          <img className="w-24" src="/dots.svg" alt="" />
        </div>
      </a>
    </Link>
  );
}
