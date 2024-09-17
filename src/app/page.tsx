"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const { scrollY } = useScroll();
  const [pageHeight, setPageHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (typeof window !== "undefined" && document?.body) {
        setPageHeight(document.body.scrollHeight - window.innerHeight);
      }
    };

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateHeight();
    checkIfMobile();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Parallax effect for desktop (keep the same as before)
  const backgroundPositionY = useTransform(
    scrollY,
    [0, pageHeight],
    ["0%", "75%"]
  );

  // On mobile, manually adjust background position as it scrolls
  const mobileBackgroundPositionY = useTransform(
    scrollY,
    [0, pageHeight],
    ["0%", "30%"] // Adjust to how much you want the background to scroll on mobile
  );

  return (
    <>
      <motion.div
        className="stars-bg"
        style={{
          backgroundPositionY: isMobile
            ? mobileBackgroundPositionY
            : backgroundPositionY,
        }}
        initial={{ backgroundPositionY: "0%" }}
      ></motion.div>

      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
