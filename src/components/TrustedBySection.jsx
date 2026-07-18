"use client";

import { motion } from "framer-motion";
import PartnerLogos from "@/components/PartnerLogos";

export default function TrustedBySection() {
  return (
    <section className="py-12 bg-surface-container-lowest/50 border-y border-white/5 relative z-10 overflow-hidden">
      <p className="text-center font-label-sm text-on-surface-variant/40 uppercase tracking-[0.2em] mb-10">
        Trusted by global brands
      </p>
      <div className="marquee-container relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          <div className="flex gap-16 items-center shrink-0">
            <PartnerLogos />
          </div>
          <div className="flex gap-16 items-center shrink-0">
            <PartnerLogos />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
