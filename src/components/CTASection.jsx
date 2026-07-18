"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { containerVariants, itemFadeUp } from "@/lib/animations";

export default function CTASection() {
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    company: "",
    goals: "",
  });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      setQuoteForm({ name: "", email: "", company: "", goals: "" });
    }, 3000);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center"
    >
      <div className="glass-card rounded-2xl p-8 md:p-16 border-primary/20 relative overflow-hidden">
        <motion.div
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -top-32 -right-32 w-80 h-80 bg-tertiary/20 rounded-full blur-[100px]"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.h2 variants={itemFadeUp} className="font-headline-xl text-3xl md:text-6xl text-white mb-8 leading-[1.1] font-bold">
          Ready to elevate your brand experience?
        </motion.h2>
        
        <motion.p variants={itemFadeUp} className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Just bring your creative business idea or the communication problem. Let's solve them together.
        </motion.p>
        
        <motion.div variants={itemFadeUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
          <Dialog>
            <DialogTrigger className="btn-gradient text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20">
              Contact Us
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-surface-container border border-primary/20 text-white rounded-xl shadow-2xl p-6 backdrop-blur-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline-md text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" data-icon="auto_awesome">
                    auto_awesome
                  </span>
                  Contact Us
                </DialogTitle>
                <DialogDescription className="text-on-surface-variant text-sm font-body-md">
                  Let's collaborate on your goals. Provide your details below.
                </DialogDescription>
              </DialogHeader>
              {quoteSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <span className="material-symbols-outlined text-primary text-6xl mb-4 animate-bounce">
                    check_circle
                  </span>
                  <h4 className="text-white text-lg font-bold">Request Sent!</h4>
                  <p className="text-on-surface-variant text-sm mt-2">
                    We will reach out to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4 mt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-primary uppercase tracking-wider">Your Name</label>
                    <Input
                      required
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      placeholder="John Doe"
                      className="bg-surface-container-lowest border-white/10 text-white rounded-lg focus:ring-primary focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-primary uppercase tracking-wider">Business Email</label>
                    <Input
                      required
                      type="email"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      placeholder="john@company.com"
                      className="bg-surface-container-lowest border-white/10 text-white rounded-lg focus:ring-primary focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-primary uppercase tracking-wider">Company Name</label>
                    <Input
                      required
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="bg-surface-container-lowest border-white/10 text-white rounded-lg focus:ring-primary focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-primary uppercase tracking-wider">Your Requirements</label>
                    <Input
                      required
                      value={quoteForm.goals}
                      onChange={(e) => setQuoteForm({ ...quoteForm, goals: e.target.value })}
                      placeholder="Describe what you want to achieve"
                      className="bg-surface-container-lowest border-white/10 text-white rounded-lg focus:ring-primary focus:border-primary/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gradient w-full text-white font-bold py-3 rounded-full mt-4 active:scale-95 transition-transform font-label-sm text-sm uppercase tracking-widest"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </DialogContent>
          </Dialog>
          <button className="bg-white/5 text-white border border-white/20 px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md">
            About Us
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
