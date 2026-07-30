"use client";

import { motion } from "framer-motion";

export default function CareersCultureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32" id="culture">
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-headline-lg text-3xl md:text-headline-lg text-white font-bold">
          WHAT'S HAPPENING!
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-outline-variant to-transparent ml-8" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]"
      >
        {/* Bento 1: Large MMPL Event Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-2 md:row-span-2 glass-card rounded-xl overflow-hidden relative group cursor-pointer border border-white/5 hover:border-primary/40 min-h-[350px]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChQr7xGO-Whzqk2dUJKgpbwcgXogc8JWeNptyrHNqp3G2KL4MkKa7fGbQTuAzgGMjmDTzRzit2HczSQYbhR-5LS3LEPYH-I51LPDKLgZg5qArisie2ODiDzIeie5OV51MZS-C40icVEQR15Hy7r2TVnKhvbenHHa3i50L3n4z67sIzI9dNFieTjQlem_veB18HGLoVzxGYxaH3wqh6uNE7Hrz1d18pA8wT8WyjFk5btGuESmr5cJ73KFZLz6O1PxUZGz2TFM3EhA')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
          <div className="absolute bottom-0 p-8 z-10">
            <span className="text-primary font-label-sm text-xs uppercase tracking-widest font-semibold bg-primary/10 px-3 py-1 rounded-full border border-primary/20 backdrop-blur-sm">
              Event of the Year
            </span>
            <h3 className="font-headline-md text-2xl md:text-headline-md text-white mt-3 font-bold group-hover:text-primary transition-colors">
              Moshi Moshi Premier League '24 Winners!
            </h3>
            <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
              Head to our Instagram to look at our MMPL reels!! Pretty lit!
            </p>
          </div>
        </motion.div>

        {/* Bento 2: Pajama Day */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-1 glass-card rounded-xl overflow-hidden relative group cursor-pointer border border-white/5 hover:border-primary/40 min-h-[240px]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBI3iD5_b5qHY6yeHUsz_2rtOQA96lPNs14u2HH8dmzXtWl2PJDsNgI9skxSYIeOgQ9LBdV2WNGDwpcEEUDvkxu6DdAZ1eegvBhXPkQQ7cHzf1fA8EAzlQc4WsWwGhr7MYWfRkYf6FIZEd7vLDaycmNRpjzzjF0qFpw5kQARQWusC3ALa2HUHK0yvJsbxcUnY24ITg3Hz5f8mbWgcn0jiZMOXXUl1r8fz2lkKASJdrRsNpJ4UyfKpu3KWf4z_dZ5M558bfF3ZVzKg')",
            }}
          />
          <div className="absolute inset-0 bg-surface/50 group-hover:bg-surface/30 transition-colors" />
          <div className="relative p-6 h-full flex flex-col justify-end z-10">
            <h3 className="font-headline-md text-xl text-white font-bold mb-1">
              Pajama Day!
            </h3>
            <p className="text-label-sm text-on-surface-variant text-xs">
              Prioritizing comfort while we crush goals.
            </p>
          </div>
        </motion.div>

        {/* Bento 3: Pogo & Friends */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-1 glass-card rounded-xl overflow-hidden relative group cursor-pointer border border-white/5 hover:border-primary/40 min-h-[240px]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCX77h0VIj3E-HPhDbqlVKApRG2OezR1n_qhsQsLVuoPr7on9EqPUNx4A5CeQdb_7DIjpTng_ndCna_A1IcB_9gpPNKfFbjeZXQLz5DgfrA20tda8fHvS5jkPwvb0ODa1bfv1oVIi4vbQka1gRDchQcHN4wVJrZrJDgDeM12316NYWQjXkrA4rxW2QbJiqocmoqB-90iNIsgbPZO3kp6babx2yRKsuDOmkAAzYF5r9XHOxbsaJZKBoWdzy_oGAiJe3TMmNQsa618g')",
            }}
          />
          <div className="absolute inset-0 bg-surface/50 group-hover:bg-surface/30 transition-colors" />
          <div className="relative p-6 h-full flex flex-col justify-end z-10">
            <h3 className="font-headline-md text-xl text-white font-bold mb-1">
              POGO & Friends
            </h3>
            <p className="text-label-sm text-on-surface-variant text-xs">
              The 4-legged ones will win your heart.
            </p>
          </div>
        </motion.div>

        {/* Bento 4: Goss with the Boss */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-2 glass-card rounded-xl flex items-center p-8 bg-gradient-to-br from-primary-container/20 via-surface-container to-transparent border border-primary/20 group cursor-pointer hover:border-primary/50 min-h-[160px]"
        >
          <div className="flex-1">
            <h3 className="font-headline-md text-2xl text-white font-bold mb-2 group-hover:text-primary transition-colors">
              Goss with the Boss!
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              National Intern Day celebrations and unfiltered sessions with our leadership team.
            </p>
          </div>
          <span className="material-symbols-outlined text-primary text-6xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all ml-4">
            forum
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
