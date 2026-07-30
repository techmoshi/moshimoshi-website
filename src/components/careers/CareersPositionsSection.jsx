"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const positions = [
  {
    id: "art-director",
    title: "Art Director",
    category: "Creative",
    badge: "Full-time",
    badgeColor: "bg-primary/10 text-primary border border-primary/20",
    description:
      "Lead the creative crew & design killer client campaigns and projects from concept to execution. Must slay Photoshop & deadlines.",
    location: "Bengaluru",
    experience: "5-6 Yrs Experience",
    isFeatured: false,
  },
  {
    id: "brand-strategist",
    title: "Brand Strategist",
    category: "Strategy",
    badge: "Hot Role",
    badgeColor: "bg-tertiary/10 text-tertiary border border-tertiary/20",
    description:
      "We need a storytelling whiz with a strategic mind to crush client problems. Bonus points for a go-getter attitude.",
    location: "Bengaluru",
    experience: "3 Yrs Experience",
    isFeatured: true,
  },
  {
    id: "content-writer-intern",
    title: "Content Writer Intern",
    category: "Creative",
    badge: "Internship",
    badgeColor: "bg-secondary/10 text-secondary border border-secondary/20",
    description:
      "Creative wordsmith with High energy needed! Decode client briefs, write killer copy for ads, collaborate and network like a pro.",
    location: "Bengaluru",
    experience: "3 months Duration",
    isFeatured: false,
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    category: "Creative",
    badge: "Full-time",
    badgeColor: "bg-primary/10 text-primary border border-primary/20",
    description:
      "Craft visually stunning brand assets, UI layouts, and social media campaigns with sleek modern aesthetics.",
    location: "Bengaluru",
    experience: "2-4 Yrs Experience",
    isFeatured: false,
  },
  {
    id: "account-manager",
    title: "Account Manager",
    category: "Management",
    badge: "Full-time",
    badgeColor: "bg-tertiary/10 text-tertiary border border-tertiary/20",
    description:
      "Manage client relationships, project timelines, and deliver high-impact communication strategy execution.",
    location: "Bengaluru",
    experience: "3-5 Yrs Experience",
    isFeatured: false,
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    category: "Tech",
    badge: "Full-time",
    badgeColor: "bg-primary/10 text-primary border border-primary/20",
    description:
      "Build cutting-edge web applications and interactive visual experiences using React, Next.js, and modern CSS.",
    location: "Bengaluru",
    experience: "2-4 Yrs Experience",
    isFeatured: false,
  },
];

const categories = ["All", "Creative", "Strategy", "Management", "Tech"];

export default function CareersPositionsSection({ onSelectPosition }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPositions =
    activeCategory === "All"
      ? positions
      : positions.filter((p) => p.category === activeCategory);

  const handleApplyClick = (positionTitle) => {
    if (onSelectPosition) {
      onSelectPosition(positionTitle);
    }
    const applyElement = document.getElementById("apply");
    if (applyElement) {
      applyElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-surface-container-low py-32" id="positions">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg text-3xl md:text-headline-lg text-white mb-4 font-bold"
          >
            OPEN POSITIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-body-md"
          >
            Join our crew of rebels and creators
          </motion.p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary shadow-lg shadow-primary/25"
                    : "border border-outline-variant text-on-surface-variant hover:bg-white/5 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Positions Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <AnimatePresence mode="popLayout">
            {filteredPositions.map((pos) => (
              <motion.div
                key={pos.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 rounded-xl flex flex-col h-full border border-white/5 hover:border-primary/40 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-headline-md text-xl text-white font-bold">
                    {pos.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-label-sm text-xs ${pos.badgeColor}`}>
                    {pos.badge}
                  </span>
                </div>

                <p className="text-on-surface-variant mb-8 flex-grow text-sm leading-relaxed">
                  {pos.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-tertiary">
                      location_on
                    </span>
                    <span>{pos.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-tertiary">
                      work_history
                    </span>
                    <span>{pos.experience}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleApplyClick(pos.title)}
                  className="w-full py-4 text-center rounded-lg font-bold transition-all font-label-sm text-sm uppercase tracking-wider cursor-pointer border border-primary text-primary hover:bg-primary hover:text-on-primary hover:shadow-[0_0_20px_rgba(237,177,255,0.4)]"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
