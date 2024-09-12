"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Contact() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="contact-section overflow-x-hidden">
      <div className="content container overflow-hidden" ref={contentRef}>
        <motion.div
          className="flex justify-center items-center md:flex-row flex-col"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <motion.div
            className="w-full md:w-1/2 gap-10 z-10 overflow-auto mb-20"
            variants={itemVariants}
          >
            <h3 className="pt-10 pb-12 text-6xl text-center text-white">
              Contact Me
            </h3>
            <div className="bg-[rgba(255,255,255,0.8)] text-black p-10 rounded-md">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full mb-5"
              />

              <textarea
                placeholder="Your Message"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 w-full mb-5"
              />
              <button className="bg-primary text-white p-3 rounded-md w-full transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95">
                Send
              </button>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-end"
            variants={itemVariants}
          >
            <div className="relative md:-mr-10">
              <Image
                src="/contact-g-3.png"
                width={778}
                height={788}
                alt="Contact Girl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
