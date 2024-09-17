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

  useEffect(() => {
    const updateHeight = () => {
      if (typeof window !== "undefined" && document?.body) {
        setPageHeight(document.body.scrollHeight - window.innerHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Use different parallax intensity for mobile vs desktop
  const isMobile = window.innerWidth <= 768; // Define mobile breakpoint

  const backgroundPositionY = useTransform(
    scrollY,
    [0, pageHeight],
    isMobile ? ["0%", "30%"] : ["0%", "75%"] // Adjust the parallax effect on mobile
  );

  return (
    <>
      <motion.div
        className="stars-bg"
        style={{
          backgroundPositionY,
        }}
        initial={{
          backgroundPositionY: "0%",
        }}
      ></motion.div>

      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
