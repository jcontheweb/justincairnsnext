import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavigationLink from "./NavigationLink";
import PrimaryButton from "../Buttons/PrimaryButton";
import TertiaryButton from "../Buttons/TertiaryButton";

const routes = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "#about",
    label: "About",
  },
  {
    link: "#services",
    label: "Services",
  },
  {
    link: "#portfolio",
    label: "Portfolio",
  },
  {
    link: "#testimonial",
    label: "Testimonial",
  },
];

export default function Navigation() {
  const router = useRouter();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const windowHeight = window.innerHeight;
    document.addEventListener("scroll", () => {
      if (window.scrollY > windowHeight * 0.8) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });
  });

  const styles = {
    light: "bg-gray-50 text-black",
    dark: "bg-black text-white",
  }[theme];

  return (
    <header
      className={`${styles} z-20 fixed top-0 inset-x-0 transition-all duration-300`}
    >
      <nav className="flex items-center justify-between max-w-5xl md:px-8 px-4 mx-auto w-full py-4">
        <Link href="/">
          <a className="font-bold text-lg leading-none">justincairns.ca</a>
        </Link>
        <div className="hidden md:flex items-center">
          {routes.map((route, index) => (
            <div key={index} className="mr-10">
              <NavigationLink
                theme={theme}
                router={router}
                link={route.link}
                label={route.label}
              />
            </div>
          ))}
          {theme == "light" ? (
            <PrimaryButton size="md">Contact</PrimaryButton>
          ) : (
            <TertiaryButton size="md">Contact</TertiaryButton>
          )}
        </div>
      </nav>
    </header>
  );
}
