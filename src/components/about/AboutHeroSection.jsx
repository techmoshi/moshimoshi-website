"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const typewriterWords = ["Extra", "Extraordinary", "Extraverted", "Extra Creative"];

export default function AboutHeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasHeroLoaded, setHasHeroLoaded] = useState(false);

  // Start typewriter typing after initial hero entrance sequence finishes
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasHeroLoaded(true);
    }, 800);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasHeroLoaded) return;

    const targetWord = typewriterWords[wordIndex];
    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && currentText === targetWord) {
      speed = 2200;
    } else if (isDeleting && currentText === "") {
      speed = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== targetWord) {
          setCurrentText(targetWord.slice(0, currentText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (currentText !== "") {
          setCurrentText(targetWord.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, hasHeroLoaded]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const barsContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const barItemVariants = {
    hidden: { opacity: 0, y: 25, scaleY: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-[819px] flex flex-col justify-center items-center text-center px-margin-mobile md:px-margin-desktop py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 max-w-4xl relative z-10 flex flex-col items-center"
      >
        {/* 1. Pill Tag */}
        <motion.div variants={itemVariants}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm tracking-[0.2em] uppercase backdrop-blur-sm">
            Communication Company
          </span>
        </motion.div>

        {/* 2. Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-headline-xl font-headline-xl text-on-surface leading-tight tracking-tight min-h-[1.3em] flex items-center justify-center flex-wrap gap-x-3"
        >
          <span>Expect the</span>
          <span className="inline-flex items-center">
            <span className="aurora-gradient font-extrabold drop-shadow-[0_0_30px_rgba(237,177,255,0.4)]">
              {currentText}
            </span>
            <span className="inline-block w-1 md:w-1.5 h-[0.85em] bg-primary align-middle ml-1 rounded-sm animate-pulse shadow-[0_0_12px_rgba(237,177,255,0.9)]" />
          </span>
        </motion.h1>

        {/* 3. Subtitle Description */}
        <motion.p
          variants={itemVariants}
          className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          Not just an ad agency or a creative agency, we are a Communication Company. We release ourselves from preset definitions to unlock a world of creative possibilities.
        </motion.p>

        {/* 4. Decorative Glow Bars (Appears in sequence after text items) */}
        <motion.div
          variants={barsContainerVariants}
          className="pt-8 flex justify-center items-center space-x-4 relative z-10 h-16"
        >
          {/* Bar 1 */}
          <motion.div
            variants={barItemVariants}
            animate={
              hasHeroLoaded
                ? {
                    y: [0, -14, 0, 14, 0],
                    scaleY: [1, 1.3, 0.9, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                    boxShadow: [
                      "0 0 10px rgba(237,177,255,0.5)",
                      "0 0 25px rgba(237,177,255,0.9)",
                      "0 0 10px rgba(237,177,255,0.5)",
                    ],
                  }
                : undefined
            }
            transition={
              hasHeroLoaded
                ? { repeat: Infinity, duration: 2, ease: "easeInOut" }
                : { duration: 0.5 }
            }
            className="w-1.5 h-12 bg-primary rounded-full aurora-glow"
          />

          {/* Bar 2 */}
          <motion.div
            variants={barItemVariants}
            animate={
              hasHeroLoaded
                ? {
                    y: [0, 14, 0, -14, 0],
                    scaleY: [1, 0.85, 1.35, 0.9, 1],
                    opacity: [0.4, 0.95, 0.4],
                    boxShadow: [
                      "0 0 8px rgba(0,220,230,0.4)",
                      "0 0 22px rgba(0,220,230,0.9)",
                      "0 0 8px rgba(0,220,230,0.4)",
                    ],
                  }
                : undefined
            }
            transition={
              hasHeroLoaded
                ? { repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: 0.2 }
                : { duration: 0.5 }
            }
            className="w-1.5 h-12 bg-tertiary rounded-full"
          />

          {/* Bar 3 */}
          <motion.div
            variants={barItemVariants}
            animate={
              hasHeroLoaded
                ? {
                    y: [0, -10, 0, 10, 0],
                    scaleY: [0.9, 1.25, 1, 1.3, 0.9],
                    opacity: [0.3, 0.8, 0.3],
                    boxShadow: [
                      "0 0 8px rgba(237,177,255,0.3)",
                      "0 0 20px rgba(237,177,255,0.8)",
                      "0 0 8px rgba(237,177,255,0.3)",
                    ],
                  }
                : undefined
            }
            transition={
              hasHeroLoaded
                ? { repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.4 }
                : { duration: 0.5 }
            }
            className="w-1.5 h-12 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
