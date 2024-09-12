import Image from "next/image";

import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Experience from "../components/experience";

export default function Home() {
  return (
    <>
      <div className="grid-container"></div>

      <Hero />

      <Projects />

      <Experience />

      <Contact />

      <Footer />
    </>
  );
}
