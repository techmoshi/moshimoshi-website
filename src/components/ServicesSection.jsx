"use client";

import { motion } from "framer-motion";
import { containerVariants, itemFadeUp } from "@/lib/animations";

const services = [
  {
    id: "brand-consultancy",
    icon: "dynamic_form",
    title: "Brand Consultancy",
    description: "Strategic positioning and identity creation for brands that want to lead.",
  },
  {
    id: "website-ui-ux",
    icon: "web",
    title: "Website UI/UX",
    description: "Crafting immersive digital experiences that convert visitors into advocates.",
  },
  {
    id: "web-mobile-app",
    icon: "developer_mode",
    title: "Web/Mobile Application",
    description: "End-to-end development of high-performance progressive web and mobile apps.",
  },
  {
    id: "digital-marketing",
    icon: "campaign",
    title: "Digital Marketing",
    description: "Data-driven growth strategies through SEO, SEM, and performance marketing.",
  },
  {
    id: "live-videos",
    icon: "videocam",
    title: "Live Videos",
    description: "Professional video production that tells your story with cinematic impact.",
  },
  {
    id: "animation-service",
    icon: "animation",
    title: "2D/3D Animation",
    description: "Breathing life into concepts with state-of-the-art motion graphics and CGI.",
  },
  {
    id: "pr-service",
    icon: "public",
    title: "PR (Public Relations)",
    description: "Managing reputation and building authority through strategic media outreach.",
  },
  {
    id: "influencer-marketing",
    icon: "groups",
    title: "Influencer Marketing",
    description: "Connecting your brand with authentic voices that resonate with your audience.",
  },
];

export default function ServicesSection({ highlightedSections = [] }) {
  const getHighlightClass = (id) => {
    return highlightedSections.includes(id)
      ? "ring-2 ring-primary border-primary shadow-[0_0_25px_rgba(237,177,255,0.4)] scale-[1.03]"
      : "";
  };

  return (
    <motion.section
      id="services-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <motion.div variants={itemFadeUp} className="text-center mb-20">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">What we do</span>
        <h2 className="font-headline-xl text-4xl md:text-6xl text-white">Our Services</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary mx-auto mt-6 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemFadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            id={service.id}
            className={`glass-card service-card-glow rounded-xl p-8 group hover:border-primary/50 transition-all duration-500 cursor-pointer ${getHighlightClass(
              service.id
            )}`}
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
              {service.icon}
            </span>
            <h3 className="font-headline-md text-white mb-3 text-xl">{service.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
