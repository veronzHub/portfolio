"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="project-section pb-10 md:pb-20">
      <div className="container content" ref={contentRef}>
        <motion.h3
          className="pt-5 pb-12 text-6xl text-center text-white"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          Projects
        </motion.h3>

        <motion.div
          className="flex gap-5 text-primary flex-col md:flex-row"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
        >
          <motion.div
            className="flex flex-col justify-between rounded-md bg-[rgba(255,255,255,0.8)] p-10 w-full md:w-1/2"
            variants={cardVariants}
          >
            <div>
              <Link href="https://solana-hangman.vercel.app/" target="_blank">
                <Image
                  src="/man.png"
                  width={300}
                  height={300}
                  alt="Hangman Screenshot"
                  className="w-full transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95"
                />
              </Link>
              <h4 className="text-3xl mb-5 text-center mt-7 font-bold">
                Solana Hangman
              </h4>
              <p className="text-lg mb-3">
                A decentralized Hangman game built on the Solana blockchain.
              </p>
              <p className="text-lg mb-3">
                Created with a team as part of the Solana Encode Bootcamp.
              </p>
            </div>
            <div className="mt-auto">
              <ul className="mt-5 flex gap-5 justify-center">
                <li className="w-full text-center">
                  <Link
                    href="https://solana-hangman.vercel.app/"
                    className="bg-secondary text-white p-4 rounded-md inline-block w-full transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95"
                    target="_blank"
                  >
                    Website
                  </Link>
                </li>
                <li className="w-full text-center">
                  <Link
                    href="https://github.com/veronzHub/solana-hangman"
                    className="bg-secondary  text-white p-4 rounded-md inline-block w-full transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95"
                    target="_blank"
                  >
                    Git Repo
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between rounded-md bg-[rgba(255,255,255,0.8)] p-10 w-full md:w-1/2"
            variants={cardVariants}
          >
            <div>
              <Link href="https://www.inrtracker.com/" target="_blank">
                <Image
                  src="/blood.png"
                  width={300}
                  height={300}
                  alt="INR Tracker Screenshot"
                  className="w-full transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95"
                />
              </Link>
              <h4 className="text-3xl mb-5 text-center mt-7 font-bold">
                INR Tracker
              </h4>
              <p className="text-lg mb-3">
                A CRUD application for people taking Warfarin.
              </p>
              <p className="text-lg mb-3">
                Allows users to keep track of their Warfarin prescription and
                INR values.
              </p>
            </div>
            <div className="mt-auto">
              <ul className="mt-5 flex gap-5 justify-center">
                <li className="w-full text-center">
                  <Link
                    href="https://www.inrtracker.com/"
                    className="bg-secondary  text-white p-4 rounded-md inline-block w-full transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95"
                    target="_blank"
                  >
                    Website
                  </Link>
                </li>
                <li className="w-full text-center">
                  <Link
                    href="https://github.com/veronzHub/inrtracker_v2"
                    className="bg-secondary  text-white p-4 rounded-md inline-block w-full transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95"
                    target="_blank"
                  >
                    Git Repo
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
