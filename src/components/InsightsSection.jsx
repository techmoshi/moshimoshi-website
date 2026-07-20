"use client";

import { motion } from "framer-motion";
import { containerVariants, itemFadeUp } from "@/lib/animations";

const blogPosts = [
  {
    category: "Strategy • 2026",
    title: "Unlocking the Power of Social Media Marketing for Indian Brands",
    excerpt:
      "The virtual world is becoming increasingly noisy. Visibility has become the prime necessity of every modern-day business in this digital era...",
  },
  {
    category: "Trends • 2026",
    title: "Top 10 Best Marketing Strategies for Businesses in 2026",
    excerpt:
      "This is the era when everything in marketing should be relevant to customers in terms of the AI-based marketing approach...",
  },
  {
    category: "Advertising • 2026",
    title: "Decoding the Costliest Ads in the History of Advertising",
    excerpt:
      "From Super Bowl slots to global TV takeovers, we analyze what makes these massive investments worth every penny for the world's elite brands...",
  },
];

export default function InsightsSection() {
  return (
    <motion.section
      id="insights-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-5 md:px-20 max-w-container-max mx-auto overflow-hidden"
    >
      <motion.div variants={itemFadeUp} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
        <h2 className="font-headline-xl text-4xl md:text-5xl text-white">Our Insights</h2>
        <a
          className="text-primary font-bold hover:text-tertiary transition-colors flex items-center gap-2 group"
          href="#"
        >
          Read All Blogs <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">east</span>
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            variants={itemFadeUp}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="p-8 glass-card rounded-xl group cursor-pointer"
          >
            <div className="mb-6 text-tertiary font-label-sm uppercase tracking-widest">{post.category}</div>
            <h3 className="font-headline-md text-white mb-6 group-hover:text-primary transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center text-primary font-bold gap-2">
              Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
