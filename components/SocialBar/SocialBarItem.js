export default function SocialBarItem({ icon, url }) {
  return (
    <a
      href={url}
      target="__blank"
      className="border border-gray-50 p-4 mb-6 rounded-full flex text-black hover:text-white items-center justify-center bg-white shadow-lg transition-all duration-300 hover:bg-black"
    >
      <svg
        dangerouslySetInnerHTML={{ __html: icon }}
        className="flex items-center fill-current w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      ></svg>
    </a>
  );
}
