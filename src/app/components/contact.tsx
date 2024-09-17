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
    <section id="contact" className="contact-section overflow-hidden">
      <div className="content container " ref={contentRef}>
        <motion.div
          className="flex md:flex-row flex-col h-full relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <motion.div
            className="w-full md:w-1/2 gap-10 z-10 overflow-auto pb-10"
            variants={itemVariants}
          >
            <h3 className="pt-6 pb-12 text-6xl text-center text-white">
              Contact Me
            </h3>
            <div className="flex items-center bg-[rgba(255,255,255,0.8)] text-black p-10 rounded-md min-h-[580px]">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            className="md:absolute md:right-[-60px] bottom-0 z-100 md:w-[500px] h-auto z-20 text-center w-full pointer-events-none"
            variants={itemVariants}
          >
            <Image
              src="/contact-g-4.png"
              width={778}
              height={788}
              alt="Contact Girl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
