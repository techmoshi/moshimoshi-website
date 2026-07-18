"use client";

import { motion } from "framer-motion";
import { containerVariants, itemFadeUp } from "@/lib/animations";

export default function TestimonialsSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-32 bg-surface-container-lowest relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/10 rounded-full blur-[150px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 text-center">
        <motion.span variants={itemFadeUp} className="material-symbols-outlined text-primary text-7xl mb-10 opacity-50 block">
          format_quote
        </motion.span>
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemFadeUp} className="font-headline-xl text-3xl md:text-5xl text-white leading-tight italic font-light">
            "Moshi Moshi is a trusted digital marketing partner for Increff. The team is very hardworking, competent
            and have done a fine job in executing our critical projects."
          </motion.h2>
          <motion.div variants={itemFadeUp} className="mt-16 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-2 border-primary/30 p-1 mb-6">
              <div className="w-full h-full bg-surface-bright rounded-full flex items-center justify-center font-bold text-primary text-xl">
                MR
              </div>
            </div>
            <p className="font-headline-md text-white text-2xl mb-1">Manish Raval</p>
            <p className="text-tertiary font-label-sm tracking-[0.2em] uppercase">Increff</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
