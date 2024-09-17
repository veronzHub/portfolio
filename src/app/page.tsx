"use client";
import { useEffect, useState } from "react";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateScrollY = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };

    const updateHeight = () => {
      if (typeof window !== "undefined" && document?.body) {
        setPageHeight(document.body.scrollHeight - window.innerHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateScrollY);

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);

  const backgroundPositionY = `${(scrollY / pageHeight) * 75}%`;

  return (
    <>
      <div
        className="stars-bg"
        style={{
          backgroundPositionY: backgroundPositionY || "0%",
        }}
      ></div>

      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
