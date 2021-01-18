import TertiaryButton from "../Buttons/TertiaryButton";
import socials from "../../shared/socials.data";
import contact from "../../shared/contact.data";

export default function Footer() {
  return (
    // <footer className="relative z-20 px-4 pt-32 mt-16 bg-black md:px-8">
    <footer className="relative z-20 px-4 pt-8 overflow-hidden bg-black md:px-8">
      {/* <div className="flex items-center justify-center w-full max-w-5xl py-16 mx-auto -mt-56 border border-white footer">
        <div className="w-full max-w-lg text-center">
          <h3 className="text-3xl font-medium tracking-tight text-white">
            Have a project in mind or role to fill?
          </h3>
          <a
            href=""
            className="block mt-2 text-2xl font-medium tracking-tight text-white text-opacity-75 underline transition duration-200 hover:text-opacity-100"
          >
            hello@justincairns.ca
          </a>
        </div>
      </div> */}
      <div className="relative justify-between w-full max-w-4xl p-8 mx-auto bg-white md:flex">
        {/* <div className="relative flex justify-between w-full max-w-4xl p-8 mx-auto mt-16 overflow-hidden bg-white"> */}
        <img
          className="absolute w-24 opacity-25"
          style={{ top: "-12px", right: "-20px" }}
          src="/dots-box.svg"
          alt=""
        />
        <div className="font-medium text-center md:flex md:text-left">
          <div className="leading-none">
            {contact.locations.map((location) => (
              <p className="flex items-center mb-1 last:mb-0">
                {location}
              </p>
            ))}
          </div>
          <div className="mt-6 leading-none md:ml-24 md:mt-0">
            <p>
              <a href={`tel:${contact.tel}`}>{contact.tel}</a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-0">
          {socials.map((social, index) => (
            <a
              key={index}
              aria-label={social.name}
              href={social.url}
              target="__blank"
              className="flex items-center justify-center p-2 ml-2 text-black transition-all duration-300 bg-white border border-black rounded-full hover:text-white hover:bg-black"
            >
              <svg
                dangerouslySetInnerHTML={{ __html: social.icon }}
                className="flex items-center w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              ></svg>
            </a>
          ))}
        </div>
      </div>
      <div className="w-full max-w-4xl py-4 mx-auto text-center text-white">
        <span className="text-sm">
          Copyright &copy;justincairns.ca {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
