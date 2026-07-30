"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function AboutStorySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-32 bg-surface-container-low overflow-hidden relative">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-panel p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative group">
                <img
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  alt="Ajay and Rishav founders of Moshi Moshi"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Le05nLuGsZsmh3yCltBm7SdY0uSDpXH2h-nNIK9a4xmrOhjvnG8k30RLBvxxrgtbduYgmpeHAx-LYVt9MBFIZdtZb2Uex0v_4U7wRB_QIEFXNFCBr5EGx6SJNaBQD3qcYx5EWIRFy4JWmPqrjriy1S6sJkrhWh-i9spg7i_mWl8hmwUR0zvIHVAnjorLmAWV-BN7r4UojBIU5ozoj-7YVtFNPjkefvNDeWxrpN5eqmooOFMf8bFRJGPNDWDEolqS6klpkhjX-Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80" />
              </div>
            </div>

            {/* Floating Action 2014 Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 w-64 h-64 glass-panel rounded-2xl p-8 hidden lg:flex flex-col justify-center floating-action shadow-2xl backdrop-blur-xl border border-primary/20"
            >
              <div className="text-headline-xl font-headline-xl text-primary mb-2 font-bold tracking-tight">
                2014
              </div>
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest font-semibold">
                Where it all began
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Vision Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="text-primary font-label-sm tracking-[0.2em] uppercase text-xs font-semibold block">
              Origin Story
            </span>
            <h2 className="text-headline-lg font-headline-lg text-white">
              The 20-Year-Old Vision
            </h2>
            <div className="space-y-6 text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              <p>
                It began with two 20-year-olds, one bike, some hard selling, and logical ideas that made people relook at marketing. Today, Ajay and Rishav are 28, still believing complex business problems can be solved with simple logical solutions.
              </p>
              <p>
                Moshi Moshi, the Japanese way of saying 'Hello', was born from a terrace floor epiphany and a line from a movie. Backed by experience with 1000+ brands and a huge team of creative folks, we believe Moshi Moshi is an experience rather than just a company.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center space-x-2 text-primary font-bold group hover:text-white transition-colors"
              >
                <span>Read the full story</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Story Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-2xl bg-surface-container border border-primary/20 text-white rounded-2xl p-8 backdrop-blur-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold font-headline-lg text-white mb-2">
              The Journey of Moshi Moshi
            </DialogTitle>
            <DialogDescription className="text-primary text-sm font-label-sm uppercase tracking-wider">
              From a Terrace Epiphany to 1000+ Brands
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 text-on-surface-variant font-body-md text-base leading-relaxed mt-4">
            <p>
              In 2014, two passionate 20-year-old dreamers—Ajay and Rishav—started Moshi Moshi with zero corporate backing, one trusty motorcycle, and an unyielding belief in logic-driven marketing. Armed with grit and relentless persistence, they set out to challenge bloated traditional agency setups.
            </p>
            <p>
              The name <strong className="text-white">Moshi Moshi</strong>, inspired by the friendly Japanese phone greeting, represents openness, immediate connection, and clear communication. Over the past decade, that small terrace ambition grew into an award-winning communication powerhouse operating across Bengaluru HQ, Gurugram, and Mumbai.
            </p>
            <p>
              With over 1,000 brand transformations, a passionate squad of 80+ "Purple Sheeps", and a pioneering focus on AI-native marketing workflows, Moshi Moshi continues to prove that extraordinary ideas paired with logic will always win.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
