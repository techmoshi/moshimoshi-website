"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import MoshiMoshiLogo from "@/components/MoshiMoshiLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/15 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-primary/5">
      <div className="flex justify-between items-center h-20 px-5 md:px-20 max-w-container-max mx-auto">
        <div className="flex items-center">
          <MoshiMoshiLogo className="h-8 md:h-10 w-auto" />
        </div>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">
            Home
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md"
            href="#services-section"
          >
            Services
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md"
            href="#portfolio-section"
          >
            Portfolio
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md"
            href="#insights-section"
          >
            Insights
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Request a Quote Button - Triggers Shadcn Dialog */}
          <Dialog>
            <DialogTrigger className="btn-gradient text-white font-bold px-4 md:px-8 py-2 md:py-3 rounded-full active:scale-95 transition-all text-[10px] md:text-label-sm font-label-sm uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-primary/45 whitespace-nowrap shrink-0">
              Request a Quote
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-surface-container border border-primary/20 text-white rounded-xl shadow-2xl p-6 backdrop-blur-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline-md text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" data-icon="auto_awesome">
                    auto_awesome
                  </span>
                  Request a Quote
                </DialogTitle>
                <DialogDescription className="text-on-surface-variant text-sm font-body-md">
                  Tell us about your brand goals. Our experts will get back to you within 24 hours.
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
                  <h4 className="text-white text-lg font-bold">Proposal Sent Successfully!</h4>
                  <p className="text-on-surface-variant text-sm mt-2">
                    Our purple sheeps are already analyzing your request.
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
                    <label className="text-xs font-semibold text-primary uppercase tracking-wider">Campaign Goals</label>
                    <Input
                      required
                      value={quoteForm.goals}
                      onChange={(e) => setQuoteForm({ ...quoteForm, goals: e.target.value })}
                      placeholder="e.g. Launch a premium real estate project in Bangalore"
                      className="bg-surface-container-lowest border-white/10 text-white rounded-lg focus:ring-primary focus:border-primary/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gradient w-full text-white font-bold py-3 rounded-full mt-4 active:scale-95 transition-transform font-label-sm text-sm uppercase tracking-widest"
                  >
                    Submit Proposal
                  </button>
                </form>
              )}
            </DialogContent>
          </Dialog>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-colors shrink-0"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-surface-container-lowest overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary font-bold text-lg font-body-md"
                href="#"
              >
                Home
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-surface-variant hover:text-on-surface text-lg font-body-md transition-colors"
                href="#services-section"
              >
                Services
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-surface-variant hover:text-on-surface text-lg font-body-md transition-colors"
                href="#portfolio-section"
              >
                Portfolio
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-surface-variant hover:text-on-surface text-lg font-body-md transition-colors"
                href="#insights-section"
              >
                Insights
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
