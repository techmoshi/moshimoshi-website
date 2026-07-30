"use client";

import { motion } from "framer-motion";

const dnaItems = [
  {
    icon: "auto_awesome",
    iconColor: "text-primary",
    bgColor: "bg-primary/10 group-hover:bg-primary/20",
    title: "Extraordinary",
    description:
      "We don't settle for the ordinary. Every strategy and design is crafted to exceed expectations and redefine industry standards.",
  },
  {
    icon: "campaign",
    iconColor: "text-tertiary",
    bgColor: "bg-tertiary/10 group-hover:bg-tertiary/20",
    title: "Extraverted",
    description:
      "Bold, vocal, and unapologetically ourselves. We communicate with clarity and purpose, ensuring your brand's voice is heard above the noise.",
  },
  {
    icon: "brush",
    iconColor: "text-primary",
    bgColor: "bg-primary/10 group-hover:bg-primary/20",
    title: "Extra Creative",
    description:
      "Unleashing minds without limitations. Our creativity isn't bound by definitions; it's driven by logic and fueled by imagination.",
  },
];

export default function AboutDNASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
      >
        {dnaItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-panel p-10 rounded-xl aurora-border transition-all duration-500 group cursor-pointer"
          >
            <div
              className={`mb-8 p-4 w-fit rounded-lg ${item.bgColor} transition-colors duration-300`}
            >
              <span className={`material-symbols-outlined ${item.iconColor} text-[40px] block`}>
                {item.icon}
              </span>
            </div>
            <h3 className="text-headline-md font-headline-md mb-4 text-white group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
