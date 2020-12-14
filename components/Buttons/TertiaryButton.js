export default function TertiaryButton({ size, children }) {
    const sizes = {
      md: "px-6",
      lg: "px-8",
      xl: "px-10",
    }[size];
  
    return (
      <a
        href=""
        className={`${
          size ? sizes : "px-4"
        } py-4 font-medium leading-none w-full block inline-block rounded-full bg-white text-black shadow-none transition-all duration-300 hover:shadow-xl focus:shadow-none`}
      >
        {children}
      </a>
    );
  }
  