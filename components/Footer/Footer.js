import TertiaryButton from "../Buttons/TertiaryButton";
import socials from "../SocialBar/socials.data";

export default function Footer() {
  return (
    // <footer className="bg-black px-4 md:px-8 pt-32 z-20 relative mt-16">
    <footer className="bg-black px-4 md:px-8 pt-8 z-20 relative">
      {/* <div className="max-w-5xl w-full mx-auto footer -mt-56 py-16 border border-white flex items-center justify-center">
        <div className="max-w-lg w-full text-center">
          <h3 className="font-medium text-3xl text-white tracking-tight">
            Have a project in mind or role to fill?
          </h3>
          <a
            href=""
            className="font-medium block text-2xl mt-2 text-opacity-75 text-white tracking-tight underline transition duration-200 hover:text-opacity-100"
          >
            hello@justincairns.ca
          </a>
        </div>
      </div> */}
      <div className="max-w-4xl w-full mx-auto bg-white p-8 relative md:flex justify-between">
      {/* <div className="max-w-4xl w-full mx-auto mt-16 bg-white p-8 relative flex overflow-hidden justify-between"> */}
        <img
          className="absolute w-24 opacity-25"
          style={{ top: "-12px", right: "-20px" }}
          src="/dots-box.svg"
          alt=""
        />
        <div className="md:flex font-medium text-center md:text-left">
          <div className="leading-none">
            <p>Glasgow, UK</p>
            <p className="mt-1">Toronto, Canada</p>
          </div>
          <div className="md:ml-24 leading-none mt-6 md:mt-0">
            <p>+16475575150</p>
            <p className="mt-1">hello@justincairns.ca</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-0">
          {socials.map((social) => (
            <a
              href={social.url}
              target="__blank"
              className="border border-black p-2 ml-2 rounded-full flex text-black hover:text-white items-center justify-center bg-white transition-all duration-300 hover:bg-black"
            >
              <svg
                dangerouslySetInnerHTML={{ __html: social.icon }}
                className="flex items-center fill-current w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              ></svg>
            </a>
          ))}
        </div>
      </div>
        <div className="max-w-4xl w-full mx-auto py-4 text-white text-center">
            <span className="text-sm">Copyright @justincairns.ca 2020</span>
        </div>
    </footer>
  );
}
