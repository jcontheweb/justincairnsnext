import { useContext } from "react";

import { ContactFormContext } from "../../context/contact-form/ContactFormState";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function HireButton() {
  const { open } = useContext(ContactFormContext);
  return (
    <button
      onClick={open}
      className="inline-block w-full px-10 py-4 font-medium leading-none text-center text-white transition-all duration-300 bg-black shadow-none hover:shadow-xl focus:shadow-none"
    >
      Hire Me
    </button>
  );
}
