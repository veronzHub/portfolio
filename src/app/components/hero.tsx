"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="hero-bg"></div>
      <section className="hero-section flex items-center overflow-hidden">
        <div className="container content relative">
          <h1 className="text-secondary md:pt-20 pt-14 md:pb-4 md:mb-10 md:text-left text-center font-bold w-full text-6xl md:text-clamp md:whitespace-nowrap box-border">
            Veronica Coulombe
          </h1>

          <motion.div
            className="flex justify-left items-center relative md:flex-row flex-col pb-12 md:pt-0 md:pb-36"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="w-full md:w-[400px] bg-[rgba(255,255,255,0.8)] rounded-md text-black p-10 relative text-justify order-2 z-10"
              variants={textVariants}
            >
              <p className="text-xl">
                Hello! I&apos;m a{" "}
                <span className="text-accent font-bold">
                  Front-End Developer
                </span>{" "}
                based in Seattle, Washington. I have five years of experience
                crafting intuitive and engaging web experiences. I&apos;m
                currently diving into the worlds of Web3 and AI. Let&apos;s
                connect!
              </p>
              <ul className="flex mt-5 space-x-9 justify-between md:mr-5 md:ml-5">
                <li>
                  <Link
                    href="https://github.com/veronzHub"
                    className="inline-block bg-secondary rounded-full p-4 transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95"
                    target="_blank"
                  >
                    <PiGithubLogoFill className="text-white text-3xl" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="inline-block bg-secondary rounded-full p-4 transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95 cursor-pointer"
                    onClick={(e) => handleContactClick(e)}
                  >
                    <MdEmail className="text-white text-3xl" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/veronicacoulombe/"
                    className="inline-block bg-secondary rounded-full p-4 transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-white text-3xl" />
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="order-1 md:absolute md:-right-32 lg:-right-10 md:-top-20 z-20 pointer-events-none"
              variants={imageVariants}
            >
              <Image
                src="/hero-g-w-10.png"
                alt="Hero Image"
                width={640}
                height={574}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
