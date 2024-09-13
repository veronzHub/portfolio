"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const handleScroll = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hero-bg"></div>
      <section className="hero-section  flex items-center overflow-hidden">
        <motion.div
          className="container content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-primary pt-14 pb-4 lg:text-8xl text-7xl md:text-left text-center md:mb-10"
            variants={itemVariants}
          >
            Veronica Coulombe
          </motion.h1>

          <div className="flex justify-left items-center relative md:flex-row flex-col pb-12 md:pt-0 md:pb-20">
            <motion.div
              className="w-full md:w-[400px] bg-[rgba(255,255,255,0.8)] rounded-md text-black p-10 relative text-justify order-2"
              variants={itemVariants}
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
                  <div
                    className="inline-block bg-secondary rounded-full p-4 transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95 cursor-pointer"
                    onClick={handleScroll}
                  >
                    <MdEmail className="text-white text-3xl" />
                  </div>
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
              className="order-1 md:absolute md:-right-32 lg:-right-20 md:-top-30"
              variants={itemVariants}
            >
              <Image
                src="/hero-g-w-10.png"
                alt="Hero Image"
                width={640}
                height={574}
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
