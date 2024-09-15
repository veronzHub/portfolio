"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ContactForm from "./form"; // Import your form component

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
          className="flex md:flex-row flex-col h-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <motion.div
            className="w-full md:w-1/2 gap-10 z-10 overflow-auto pb-10"
            variants={itemVariants}
          >
            <h3 className="pt-10 pb-12 text-6xl text-center text-white">
              Contact Me
            </h3>
            <div className="bg-[rgba(255,255,255,0.8)] text-black p-10 rounded-md">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-end items-end pr-1"
            variants={itemVariants}
          >
            <div>
              <Image
                src="/contact-g-4.png"
                width={778}
                height={788}
                alt="Contact Girl"
                className="object-contain w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
