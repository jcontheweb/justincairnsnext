import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavigationLink from "./NavigationLink";
import ContactButton from '../Buttons/ContactButton'
import routes from "./navigation.data";

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
      className={`${styles} z-50 fixed top-0 inset-x-0 transition-all duration-300`}
    >
      <nav className="flex items-center justify-between w-full max-w-5xl px-4 py-4 mx-auto md:px-8">
        <Link href="/">
          <a className="text-lg font-bold leading-none">justincairns.ca</a>
        </Link>
        <div className="items-center hidden md:flex">
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
          <ContactButton theme={theme} />
        </div>
      </nav>
    </header>
  );
}
