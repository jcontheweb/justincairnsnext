import { useState } from "react";
import contact from "../../shared/contact.data";

export default function ContactButton({ theme }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      {expanded && (
        <div onClick={() => setExpanded(false)} className="fixed inset-0"></div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`${
          theme == "light"
            ? "text-black text-opacity-75"
            : "text-white text-opacity-75"
        } text-xs uppercase font-medium flex leading-none`}
      >
        Contact
      </button>

      {expanded && (
        <div className="absolute right-0 mt-2 top-full">
          <div className="overflow-hidden text-black bg-white shadow-md whitespace-nowrap">
            <a
              className="flex items-center px-4 py-4 text-sm font-medium transition duration-200 border-b hover:bg-black hover:text-white focus:bg-black focus:text-white"
              href={`tel:${contact.tel}`}
            >
              {contact.tel}
            </a>

            <a
              className="flex items-center px-4 py-4 text-sm font-medium transition duration-200 hover:bg-black hover:text-white focus:bg-black focus:text-white"
              href={`tel:${contact.email}`}
            >
              {contact.email}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}