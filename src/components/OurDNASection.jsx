"use client";

import { motion } from "framer-motion";
import { containerVariants, itemFadeRight, itemFadeLeft } from "@/lib/animations";

export default function OurDNASection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-32 px-5 md:px-20 max-w-container-max mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div variants={itemFadeRight}>
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our DNA</span>
          <h2 className="font-headline-xl text-5xl md:text-7xl text-white leading-tight mb-8">
            The <span className="text-gradient-aurora">Extra</span> in everything we do.
          </h2>
          <p className="text-on-surface-variant font-body-lg mb-10 leading-relaxed max-w-xl">
            At Moshi Moshi, we don't just follow trends—we define them. We are a team of creative rebels who
            believe that mediocrity is the biggest risk. Our philosophy is simple: be Extraordinary, be Extraverted,
            and be Extra Creative.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -6, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-1 cursor-default">
              <h4 className="text-white font-bold text-xl mb-2">Extraordinary</h4>
              <p className="text-on-surface-variant text-sm">Results that defy expectations and benchmarks.</p>
            </motion.div>
            <motion.div whileHover={{ y: -6, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-1 cursor-default">
              <h4 className="text-white font-bold text-xl mb-2">Extraverted</h4>
              <p className="text-on-surface-variant text-sm">Bold communication that demands attention.</p>
            </motion.div>
            <motion.div whileHover={{ y: -6, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-1 cursor-default">
              <h4 className="text-white font-bold text-xl mb-2">Extra Creative</h4>
              <p className="text-on-surface-variant text-sm">Thinking that starts where others stop.</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div variants={itemFadeLeft} className="relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
          <motion.div
            whileHover={{ rotateY: 12, rotateX: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="glass-card rounded-2xl p-12 relative overflow-hidden aspect-square flex flex-col justify-center text-center cursor-pointer [perspective:1000px]"
          >
            <div className="text-[80px] md:text-[120px] font-black text-white/5 absolute -top-5 md:-top-10 -left-5 md:-left-10 select-none">EXTRA</div>
            <span className="material-symbols-outlined text-primary text-8xl mb-8">star_half</span>
            <h3 className="font-headline-lg text-white mb-4">Not just another agency.</h3>
            <p className="text-on-surface-variant">We are the purple sheeps of the flock, standing out by design.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
