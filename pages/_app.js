import { useEffect } from "react";
import Head from 'next/head'
import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";
import "../assets/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Navigation = dynamic(import("../components/Navigation/Navigation"));
const Footer = dynamic(import("../components/Footer/Footer"));
const SocialBar = dynamic(import("../components/SocialBar/SocialBar"));

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
      <Head>
        <title>Justin Cairns | Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <SocialBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
