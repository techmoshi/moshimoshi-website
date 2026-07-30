"use client";

import { motion } from "framer-motion";

export default function CareersHeroSection() {
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

  const itemFadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const itemFadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row gap-gutter items-end"
      >
        <motion.div variants={itemFadeLeft} className="flex-1">
          <span className="text-tertiary font-label-sm text-label-sm uppercase tracking-widest mb-4 block font-semibold">
            Work With Us
          </span>
          <h1 className="font-headline-xl text-4xl md:text-6xl lg:text-headline-xl mb-8 leading-[1.1] text-white">
            LIFE AND <br />
            CAREERS @ <br />
            <span className="aurora-gradient font-extrabold">
              MOSHI MOSHI
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemFadeRight} className="flex-1 pb-4">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Moshi Moshi is a space for the world's creative people to come together, grow, have fun, and make brands. We put our people at the heart of everything we do, and champion curiosity and connectivity to deliver the best experiences.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-container text-on-primary-container rounded-lg font-bold hover:shadow-[0_0_30px_rgba(157,80,187,0.5)] transition-all inline-block font-label-sm text-sm uppercase tracking-wider"
              href="#positions"
            >
              View Openings
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-outline-variant hover:bg-white/5 text-white rounded-lg font-bold transition-all inline-block font-label-sm text-sm uppercase tracking-wider"
              href="#culture"
            >
              Our Culture
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
