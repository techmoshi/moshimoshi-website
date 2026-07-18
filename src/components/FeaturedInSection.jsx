"use client";

import { motion } from "framer-motion";
import { containerVariants, itemFadeUp } from "@/lib/animations";

const publications = [
  { name: "Brand Equity", className: "text-white font-bold text-lg tracking-tight select-none" },
  { name: "afaqs!", className: "text-white font-bold text-2xl italic select-none font-serif" },
  { name: "ADGULLY", className: "text-white font-bold text-xl uppercase tracking-tighter select-none" },
  { name: "MediaNews4U", className: "text-white font-medium text-lg select-none" },
  { name: "Business Standard", className: "text-white font-bold text-xl select-none" },
  { name: "Financial Express", className: "text-white font-bold text-lg uppercase tracking-widest select-none" },
];

export default function FeaturedInSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-surface/5 border-y border-white/5 overflow-hidden"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.p variants={itemFadeUp} className="text-center font-label-sm text-white/80 uppercase tracking-[0.2em] mb-12">Featured In</motion.p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {publications.map((pub) => (
            <motion.div key={pub.name} variants={itemFadeUp} className="flex items-center opacity-60 hover:opacity-100 transition-all h-8">
              <span className={pub.className}>{pub.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
