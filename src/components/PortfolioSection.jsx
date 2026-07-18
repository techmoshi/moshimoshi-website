"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemFadeUp, itemFadeRight, itemFadeLeft } from "@/lib/animations";

export default function PortfolioSection({ highlightedSections = [] }) {
  const getHighlightClass = (id) => {
    return highlightedSections.includes(id)
      ? "ring-2 ring-primary border-primary shadow-[0_0_25px_rgba(237,177,255,0.4)] scale-[1.03]"
      : "";
  };

  return (
    <motion.section
      id="portfolio-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden"
    >
      <motion.div variants={itemFadeUp} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-tertiary/20 bg-tertiary/5">
            Recommended for you
          </span>
          <h2 className="font-headline-xl text-4xl md:text-6xl text-white mt-4">Expect the Extra</h2>
        </div>
        <button className="flex items-center text-primary font-bold group">
          Explore our full portfolio
          <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
            arrow_right_alt
          </span>
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Godrej Card */}
        <motion.div
          variants={itemFadeRight}
          whileHover={{ y: -8, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          id="godrej-case-study"
          className={`md:col-span-8 glass-card rounded-xl overflow-hidden group min-h-[400px] flex flex-col relative duration-500 cursor-pointer ${getHighlightClass(
            "godrej-case-study"
          )}`}
        >
          <div className="absolute inset-0 z-0">
            <Image
              alt="Godrej Lakeside Orchard"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              src="/godrej_lakeside_orchard.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-10 flex flex-col h-full justify-center">
            <span className="bg-primary/20 text-primary-fixed border border-primary/30 px-3 py-1 rounded text-[10px] font-bold uppercase mb-4 w-fit tracking-wider backdrop-blur-md">
              Real Estate
            </span>
            <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-white mb-4">
              Godrej Lakeside Orchard
            </h3>
            <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed font-body-lg">
              Crafting a premium lakeside lifestyle destination in Bangalore's fastest-growing corridor. Live
              reimagined in every detail.
            </p>
            <a className="flex items-center gap-3 text-white font-bold group/link w-fit" href="#">
              <span className="p-2 rounded-full border border-white/20 group-hover/link:bg-primary transition-all">
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </span>
              <span>Case Study</span>
            </a>
          </div>
        </motion.div>

        {/* Uber Card */}
        <motion.div
          variants={itemFadeLeft}
          whileHover={{ y: -8, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          id="uber-case-study"
          className={`md:col-span-4 btn-gradient text-white rounded-xl p-10 flex flex-col justify-between group shadow-xl relative overflow-hidden duration-500 cursor-pointer ${getHighlightClass(
            "uber-case-study"
          )}`}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <span className="material-symbols-outlined text-white text-4xl">commute</span>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-1 rounded backdrop-blur-md">
                Mobility
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-md md:text-3xl mb-6">Uber for Business</h3>
            <p className="text-white/85 font-body-md leading-relaxed">
              India's preferred corporate mobility partner. A 360° campaign positioning all set for business
              travel.
            </p>
          </div>
          <a className="relative z-10 flex items-center gap-2 font-bold group/btn mt-8" href="#">
            View Case Study
            <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">
              chevron_right
            </span>
          </a>
        </motion.div>

        {/* Titan Card */}
        <motion.div
          variants={itemFadeRight}
          whileHover={{ y: -8, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          id="titan-case-study"
          className={`md:col-span-4 glass-card rounded-xl p-10 group flex flex-col justify-between relative overflow-hidden duration-500 cursor-pointer ${getHighlightClass(
            "titan-case-study"
          )}`}
        >
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 mb-8">
              <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-12 transition-transform">
                watch
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase text-tertiary tracking-widest block mb-2">
              40 Years of Titan
            </span>
            <h3 className="font-headline-lg text-headline-md text-white mb-4">Flying Tourbillon</h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Launching India's first flying tourbillon, a feat once exclusive to Swiss majors.
            </p>
          </div>
          <a className="mt-8 text-primary font-bold text-sm flex items-center gap-1 hover:gap-3 transition-all w-fit" href="#">
            View Portfolio <span className="material-symbols-outlined text-sm">east</span>
          </a>
        </motion.div>

        {/* UnderNeat Card */}
        <motion.div
          variants={itemFadeLeft}
          whileHover={{ y: -8, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          id="underneat-case-study"
          className={`md:col-span-8 glass-card rounded-xl overflow-hidden flex flex-col md:flex-row group duration-500 cursor-pointer ${getHighlightClass(
            "underneat-case-study"
          )}`}
        >
          <div className="w-full md:w-1/2 h-full min-h-[300px] overflow-hidden relative">
            <Image
              alt="UnderNeat by Kusha Kapila"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              src="/underneat_campaign.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent"></div>
          </div>
          
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <span className="bg-secondary/10 text-secondary border border-secondary/30 px-3 py-1 rounded text-[10px] font-bold uppercase mb-4 w-fit tracking-wider">
              Fashion & Apparel
            </span>
            <h3 className="font-headline-lg text-headline-md md:text-3xl text-white mb-4 font-bold">
              UnderNeat by Kusha Kapila
            </h3>
            <p className="text-on-surface-variant font-body-md mb-8 leading-relaxed">
              Celebrity influencer innerwear brand launched through organic anticipation building. Shapewear for
              Indians.
            </p>
            <button className="w-fit px-8 py-3 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/10">
              Explore Work
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
