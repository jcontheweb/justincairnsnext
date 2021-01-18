export default function DownloadButton() {
  return (
    <a
      className="px-6 py-4 w-full text-center font-medium leading-none inline-block bg-transparent border border-black text-black shadow-none transition-all duration-300 hover:shadow-xl focus:shadow-none`}"
      href="/Justin_Cairns_2021.pdf"
      download="Justin_Cairns_Resume.pdf"
    >
      Download CV
    </a>
  );
}
