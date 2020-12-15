import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import "tailwindcss/tailwind.css";
import "../assets/style.css"
import AOS from "aos";
import "aos/dist/aos.css";

// import Navigation from "../components/Navigation/Navigation";
// import Footer from "../components/Footer/Footer";
// import SocialBar from "../components/SocialBar/SocialBar";

const Navigation = dynamic(import('../components/Navigation/Navigation'))
const Footer = dynamic(import('../components/Footer/Footer'))
const SocialBar = dynamic(import('../components/SocialBar/SocialBar'))

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div className="text-black">
      <Navigation />
      <SocialBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
