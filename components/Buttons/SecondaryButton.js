export default function SecondaryButton({ size, children, href }) {
    const sizes = {
      md: "px-6",
      lg: "px-8",
      xl: "px-10"
    }[size];
  
    return (
      <button
        href={href}
        className={`${size ? sizes : 'px-4'} py-4 w-full text-center font-medium leading-none inline-block rounded-full bg-transparent border border-black text-black shadow-none transition-all duration-300 hover:shadow-xl focus:shadow-none`}
      >
        {children}
      </button>
    );
  }
  