"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WelcomePage() {
  const questionText = "Ready to explore my creative journey?";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1c2132] text-white px-4">
      <div className="flex flex-col items-center text-center gap-8 md:gap-12 md:flex-row md:text-left md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg flex flex-col items-center md:items-start"
        >
          <h1 className="text-3xl font-bold md:text-4xl">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-base text-gray-300 md:text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold text-white">Celina Apu</span>
            , a passionate{" "}
            <span className="text-white">Full-Stack Developer</span>. I design
            and build scalable web applications with modern technologies.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6"
          >
            <Link href="/home">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-blue-500 px-6 py-2 text-base font-semibold text-white shadow-md transition-all hover:bg-blue-600"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src="https://res.cloudinary.com/celina/image/upload/v1756646191/Screenshot_2025-08-31_141307_kfmth8.png"
              alt="Computer illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="text-xl font-semibold text-blue-300 md:text-2xl">
          {questionText.split("").map((char, index) => {
            const key = `${char}-${questionText}-${index}`;
            return (
              <motion.span
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.5 + index * 0.05,
                  duration: 0.3,
                }}
                className={char === " " ? "inline-block w-2" : ""}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
