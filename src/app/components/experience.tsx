"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.3,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="experience-section pb-10 md:pb-20">
      <div className="container content" ref={contentRef}>
        <motion.h3
          className="pt-6 pb-12 text-6xl text-center text-white"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          Experience
        </motion.h3>
        <motion.div
          className="rounded-md flex bg-[rgba(255,255,255,0.8)] p-10 gap-10 text-primary md:flex-row flex-col"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <div>
            <Image
              src="/yomi_games_logo.png"
              width={200}
              height={260}
              alt="Yomi Games Logo"
              className="object-contain w-full md:w-[200px] h-auto min-w-[200px]"
            />
          </div>
          <div>
            <h4 className="text-3xl mb-2 font-bold">Front-End Developer</h4>
            <h5 className="text-xl mb-10 font-bold">
              Yomi Games - 2022-Present
            </h5>
            <p className="mb-10 text-lg">
              Developed and maintained highly responsive and visually appealing
              landing pages for Web3 offerings.
            </p>
            <p className="mb-10 text-lg">
              Reduced game art production time by 70% by developing a custom
              Stable Diffusion AI model that mirrored the hand-drawn art style
              used by the team.
            </p>
            <p className="mb-10 text-lg">
              Collaborated with design and development teams to ensure seamless
              integration of artwork and UI/UX elements.
            </p>
            <p>
              <Link
                href="/Veronica-Coulombe-Resume_Redacted.pdf"
                className="bg-secondary text-white p-4 rounded-md inline-block w-full text-center transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95"
                target="_blank"
              >
                View Full Resume
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
