"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function AboutCTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-margin-mobile relative z-10 space-y-8"
      >
        <h2 className="text-3xl md:text- headline-md font-headline-md text-white mb-8">
          Ready to bring the <span className="text-primary aurora-glow">EXTRA</span> to your brand?
        </h2>

        <Dialog>
          <DialogTrigger
            render={
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(237,177,255,0.5)] transition-all cursor-pointer font-label-sm uppercase tracking-widest"
              >
                CONTACT US NOW
              </motion.button>
            }
          />
          <DialogContent className="sm:max-w-md bg-surface-container border border-primary/20 text-white rounded-2xl p-6 backdrop-blur-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold font-headline-md text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">mail</span>
                Get In Touch
              </DialogTitle>
              <DialogDescription className="text-on-surface-variant text-sm">
                Let's talk about how Moshi Moshi can unlock extra growth for your brand.
              </DialogDescription>
            </DialogHeader>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <span className="material-symbols-outlined text-primary text-5xl animate-bounce">
                  check_circle
                </span>
                <h4 className="text-white font-bold text-lg">Message Received!</h4>
                <p className="text-on-surface-variant text-sm">
                  Our team will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div>
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                    Name
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="bg-surface-container-lowest border-white/10 text-white rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                    Email
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="bg-surface-container-lowest border-white/10 text-white rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                    Message
                  </label>
                  <Input
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="bg-surface-container-lowest border-white/10 text-white rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gradient w-full text-white font-bold py-3 rounded-full mt-4 font-label-sm text-sm uppercase tracking-widest cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
}
