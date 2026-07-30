"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ClientInteractions from "./ClientInteractions";
import {
  sectionReveal,
  containerVariants,
  itemFadeUp,
  itemFadeRight,
  itemFadeLeft,
  scaleUp,
} from "@/lib/animations";

export default function ServicePageClient({ service }) {
  return (
    <>
      {/* Global CSS Injection for the mouse glow effect on glass cards */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .glass-card {
              position: relative;
              overflow: hidden;
            }
            .glass-card::before {
              content: '';
              position: absolute;
              inset: 0;
              border-radius: inherit;
              background: radial-gradient(
                400px circle at var(--mouse-x, 0) var(--mouse-y, 0),
                rgba(237, 177, 255, 0.08),
                transparent 40%
              );
              z-index: 1;
              pointer-events: none;
              opacity: 0;
              transition: opacity 0.5s ease;
            }
            .glass-card:hover::before {
              opacity: 1;
            }
            details > summary::-webkit-details-marker {
              display: none;
            }
          `,
        }}
      />

      {/* Global Aurora Backgrounds */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#9d50bb] aurora-glow rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#00dce6] aurora-glow rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>

      <Navbar />

      <main className="w-full bg-[#101221] text-[#e1e1f6] overflow-x-hidden selection:bg-primary-container selection:text-white">
        
        {/* Hero Section */}
        <motion.header 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative pt-40 pb-24 px-8 md:px-20 min-h-screen flex flex-col justify-center"
        >
          <div className="max-w-5xl mx-auto text-center z-10">
            <motion.span 
              variants={itemFadeUp}
              className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-label-sm text-label-sm mb-6 uppercase tracking-widest"
            >
              {service.tag}
            </motion.span>
            <motion.h1 
              variants={itemFadeUp}
              className="font-headline-xl text-4xl md:text-headline-xl leading-tight mb-8 bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent font-bold"
            >
              {service.heroHeadline}
            </motion.h1>
            <motion.p 
              variants={itemFadeUp}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12 opacity-90"
            >
              {service.heroSubheading}
            </motion.p>
            <motion.div 
              variants={itemFadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="btn-gradient px-10 py-4 rounded-xl font-bold text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                {service.heroCtaText}
              </button>
              <button className="glass-card px-10 py-4 rounded-xl font-bold text-white hover:bg-white/10 cursor-pointer">
                View Our Portfolio
              </button>
            </motion.div>
          </div>

          {/* Floating Indicators */}
          {service.floatingIcons && service.floatingIcons[0] && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2"
            >
              <div className="w-32 h-32 rounded-full border border-primary/40 flex items-center justify-center animate-bounce">
                <span className="material-symbols-outlined text-primary text-5xl">
                  {service.floatingIcons[0]}
                </span>
              </div>
            </motion.div>
          )}
          {service.floatingIcons && service.floatingIcons[1] && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="hidden lg:block absolute right-10 top-1/3"
            >
              <div className="w-24 h-24 rounded-full border border-tertiary/40 flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-tertiary text-4xl">
                  {service.floatingIcons[1]}
                </span>
              </div>
            </motion.div>
          )}
        </motion.header>

        {/* Portfolio Section (Bento Grid) */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 px-8 md:px-20 max-w-container-max mx-auto"
        >
          <div className="flex justify-between items-end mb-16">
            <motion.div variants={itemFadeUp}>
              <h2 className="font-headline-lg text-headline-lg text-white mb-4">
                {service.portfolioTitle}
              </h2>
              <p className="text-on-surface-variant">
                {service.portfolioSubtitle}
              </p>
            </motion.div>
            <motion.a 
              variants={itemFadeUp}
              className="text-primary flex items-center gap-2 font-bold group" 
              href="#"
            >
              All Projects <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {service.projects && service.projects.map((project, idx) => {
              if (project.size === "large") {
                return (
                  <motion.div 
                    key={idx} 
                    variants={itemFadeUp}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="md:col-span-8 group relative rounded-2xl overflow-hidden glass-card flex flex-col justify-end p-10 min-h-[400px]"
                  >
                    <div className="absolute inset-0 z-0">
                      <img 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                        alt={project.title} 
                        src={project.image} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10">
                      {project.tag && (
                        <span className="text-tertiary font-bold text-label-sm mb-2 block">
                          {project.tag}
                        </span>
                      )}
                      <h3 className="font-headline-lg text-2xl md:text-headline-lg text-white mb-4 font-bold">
                        {project.title}
                      </h3>
                      <p className="text-on-surface-variant max-w-lg mb-6">
                        {project.description}
                      </p>
                      <a className="w-fit bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-6 py-3 rounded-lg text-white font-bold transition-all inline-block" href={project.link}>
                        {project.cta}
                      </a>
                    </div>
                  </motion.div>
                );
              } else if (project.size === "medium") {
                return (
                  <motion.div 
                    key={idx} 
                    variants={itemFadeUp}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="md:col-span-4 group relative rounded-2xl overflow-hidden glass-card flex flex-col justify-end p-8 min-h-[400px]"
                  >
                    <div className="absolute inset-0 z-0">
                      <img 
                        className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" 
                        alt={project.title} 
                        src={project.image} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-headline-md text-headline-md text-white mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="text-on-surface-variant text-body-md mb-6">
                        {project.description}
                      </p>
                      <a className="w-fit text-primary font-bold flex items-center gap-2 group inline-flex" href={project.link}>
                        {project.cta} <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                      </a>
                    </div>
                  </motion.div>
                );
              } else {
                return (
                  <motion.div 
                    key={idx} 
                    variants={itemFadeUp}
                    whileHover={{ y: -4, scale: 1.005 }}
                    className="md:col-span-12 group relative rounded-2xl overflow-hidden glass-card min-h-[320px] flex flex-col justify-center p-12"
                  >
                    <div className="absolute inset-0 z-0">
                      <img 
                        className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                        alt={project.title} 
                        src={project.image} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
                    </div>
                    <div className="max-w-2xl relative z-10">
                      <h3 className="font-headline-lg text-3xl md:text-headline-lg text-white mb-4 font-bold">
                        {project.title}
                      </h3>
                      <p className="text-on-surface-variant mb-6">
                        {project.description}
                      </p>
                      <a href={project.link} className="bg-primary-container hover:bg-primary-container/85 px-6 py-3 rounded-lg font-bold text-white transition-all inline-block">
                        {project.cta}
                      </a>
                    </div>
                  </motion.div>
                );
              }
            })}
          </div>
        </motion.section>

        {/* Educational Section */}
        <motion.section 
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 px-8 md:px-20 bg-surface-container-lowest relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-white mb-10 font-bold">
              {service.educationalTitle}
            </h2>
            <div className="space-y-8 text-on-surface-variant text-body-lg leading-relaxed">
              <p>{service.educationalDesc}</p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left mt-16">
                {service.educationalPillars && service.educationalPillars.map((pillar, idx) => (
                  <div 
                    key={idx} 
                    className={`p-8 border-l-2 ${
                      pillar.color === "tertiary" ? "border-tertiary" : "border-primary"
                    } bg-white/5 rounded-r-xl`}
                  >
                    <h4 className="text-white font-bold mb-3">{pillar.title}</h4>
                    <p className="text-body-md opacity-80">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 px-8 md:px-20 max-w-container-max mx-auto"
        >
          <div className="text-center mb-20">
            <motion.h2 variants={itemFadeUp} className="font-headline-lg text-3xl md:text-headline-lg text-white mb-4 font-bold">
              {service.servicesTitle}
            </motion.h2>
            <motion.p variants={itemFadeUp} className="text-on-surface-variant max-w-2xl mx-auto">
              {service.servicesSubtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.servicesList && service.servicesList.map((srv, idx) => (
              <motion.div 
                key={idx} 
                variants={itemFadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card p-10 rounded-2xl relative group overflow-hidden"
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform"
                  style={srv.customGradient ? { background: srv.customGradient } : undefined}
                >
                  <span className="material-symbols-outlined text-white text-3xl">
                    {srv.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-white mb-4 font-bold">
                  {srv.title}
                </h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  {srv.description}
                </p>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${
                  srv.gradient === "from-tertiary to-transparent" ? "from-tertiary" : 
                  srv.gradient === "from-secondary to-transparent" ? "from-secondary" : "from-primary"
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Us Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 px-8 md:px-20 bg-surface-container relative"
        >
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <motion.h2 variants={itemFadeUp} className="font-headline-lg text-3xl md:text-headline-lg text-white mb-8 font-bold">
                {service.whyStandOutTitle}
              </motion.h2>
              <div className="space-y-8">
                {service.whyStandOutPoints && service.whyStandOutPoints.map((point, idx) => (
                  <motion.div key={idx} variants={itemFadeRight} className="flex gap-6">
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center ${
                      point.color === "tertiary" ? "border-tertiary text-tertiary" : 
                      point.color === "secondary" ? "border-secondary text-secondary" : "border-primary text-primary"
                    }`}>
                      {point.number}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{point.title}</h4>
                      <p className="text-on-surface-variant">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={itemFadeLeft} className="lg:w-1/2 relative">
              <div className="w-full aspect-square glass-card rounded-3xl p-1 overflow-hidden">
                <img 
                  className="w-full h-full object-cover rounded-[22px]" 
                  alt={service.whyStandOutTitle} 
                  src={service.whyStandOutImg} 
                />
              </div>
              
              {/* Interactive Stat bubble */}
              {service.whyStandOutStat && (
                <motion.div 
                  variants={scaleUp}
                  className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10 animate-pulse"
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">{service.whyStandOutStat.value}</div>
                    <div className="text-[10px] uppercase tracking-tighter text-primary">{service.whyStandOutStat.label}</div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 px-8 md:px-20 max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemFadeUp} className="font-headline-lg text-3xl md:text-headline-lg text-white mb-12 text-center font-bold">
            FAQ's
          </motion.h2>
          <div className="space-y-4">
            {service.faqs && service.faqs.map((faq, idx) => (
              <motion.details 
                key={idx} 
                variants={itemFadeUp}
                className="group glass-card rounded-xl"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-white font-bold">{faq.question}</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="p-6 pt-0 text-on-surface-variant border-t border-white/5">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </motion.section>

        <CTASection />
      </main>

      <Footer />

      {/* Client component to hook up hover scroll effects and custom glow properties */}
      <ClientInteractions />
    </>
  );
}
