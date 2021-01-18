export default function PrimaryButton({ size, children, href }) {
  const sizes = {
    md: "px-6",
    lg: "px-8",
    xl: "px-10",
  }[size];

  return (
    <button
      className={`${
        size ? sizes : "px-4"
      } py-4 font-medium w-full leading-none inline-block text-center bg-black text-white shadow-none transition-all duration-300 hover:shadow-xl focus:shadow-none`}
    >
      {children}
    </button>
  );
}
