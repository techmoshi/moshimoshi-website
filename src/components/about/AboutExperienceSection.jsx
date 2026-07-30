"use client";

import { motion } from "framer-motion";

const values = [
  {
    num: "01",
    title: "Communicate Clearly",
    desc: "Whether it's a difficult situation or a compromise, we speak our truth.",
  },
  {
    num: "02",
    title: "Morally Right",
    desc: "Morals are above everything—founders, profits, and the company itself.",
  },
  {
    num: "03",
    title: "Dream It, Do It",
    desc: "Insanely positive optimism and a never-give-up attitude are our core.",
  },
  {
    num: "04",
    title: "Add Logic",
    desc: "If it logically doesn't make sense, we don't do it. Simple as that.",
  },
  {
    num: "05",
    title: "Be That Fool",
    desc: "The fool didn't know it was impossible, so he did it. Be bold and fearless.",
  },
  {
    num: "06",
    title: "Find Yourself",
    desc: "A world of opportunities to find who you really are without preset definitions.",
  },
  {
    num: "07",
    title: "Efforts Drive Us",
    desc: "Utmost care and love in the journey itself, regardless of the destination.",
  },
  {
    num: "08",
    title: "Brand's Objective",
    desc: "The end goal is always helping brands reach stakeholders creatively.",
  },
  {
    num: "09",
    title: "Staying Young",
    desc: "No matter how old we grow, we will always be young at heart.",
  },
];

export default function AboutExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-headline-lg font-headline-lg text-white mb-4"
        >
          The Moshi Moshi Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto"
        >
          Driven by strong fundamentals that guide everything from our hiring to the way we deal with customers.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {values.map((item) => (
          <motion.div
            key={item.num}
            variants={cardVariants}
            whileHover={{ y: -6, backgroundColor: "rgba(255, 255, 255, 0.06)" }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="glass-panel p-8 rounded-xl transition-all duration-300 border border-white/5 cursor-pointer group hover:border-primary/30"
          >
            <span className="text-primary-container font-headline-md mb-4 block font-bold group-hover:text-primary transition-colors">
              {item.num}
            </span>
            <h4 className="text-headline-md font-headline-md text-white mb-2 group-hover:translate-x-1 transition-transform">
              {item.title}
            </h4>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
