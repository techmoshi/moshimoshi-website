"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Moshi Moshi Custom Logo Component
function MoshiMoshiLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 28V12L18 22L26 12V28" stroke="url(#logo-grad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 28V12L35 22L42 12V28" stroke="url(#logo-grad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="22" r="3" fill="#00dce6" />
      <circle cx="35" cy="22" r="3" fill="#edb1ff" />
      <defs>
        <linearGradient id="logo-grad" x1="10" y1="12" x2="42" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#edb1ff"/>
          <stop offset="0.5" stopColor="#9d50bb"/>
          <stop offset="1" stopColor="#00dce6"/>
        </linearGradient>
      </defs>
      <text x="56" y="27" fill="white" fontSize="19" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.05em">MOSHI MOSHI</text>
    </svg>
  );
}

// Trusted Clients Logos Component using SVGs
function PartnerLogos() {
  return (
    <>
      <div className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300 h-8 min-w-[120px]">
        <svg viewBox="0 0 100 30" className="h-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="-0.02em">Uber</text>
        </svg>
      </div>
      <div className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300 h-8 min-w-[120px]">
        <svg viewBox="0 0 120 30" className="h-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="9" stroke="currentColor" strokeWidth="2.5" fill="none"/>
          <path d="M15 9V15H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <text x="36" y="22" fontSize="18" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.12em">TITAN</text>
        </svg>
      </div>
      <div className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300 h-8 min-w-[120px]">
        <svg viewBox="0 0 120 30" className="h-7 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontSize="22" fontWeight="bold" fontStyle="italic" fontFamily="Georgia, serif">Godrej</text>
        </svg>
      </div>
      <div className="flex items-center justify-center text-white/30 font-black text-xl hover:text-white transition-colors h-8 min-w-[120px] text-center font-body-md select-none">
        RAPIDO
      </div>
      <div className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300 h-8 min-w-[120px]">
        <svg viewBox="0 0 100 30" className="h-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="22" fontSize="24" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="-0.05em">VRL</text>
        </svg>
      </div>
    </>
  );
}

export default function Home() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  // Quote form state
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    company: "",
    goals: "",
  });

  // AI Assistant states
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [highlightedSections, setHighlightedSections] = useState([]);

  // Refs for GSAP
  const heroTitleRef = useRef(null);
  const tagsRef = useRef(null);

  // Quote form submission handler
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      setQuoteForm({ name: "", email: "", company: "", goals: "" });
    }, 3000);
  };

  // AI search submission handler
  const handleAISearch = (e) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setAiResponse("");
    setHighlightedSections([]);

    // Simulating AI processing
    setTimeout(() => {
      setIsSearching(false);
      const query = searchQuery.toLowerCase();
      let responseText = "";
      let targets = [];

      if (query.includes("brand") || query.includes("consult") || query.includes("identity")) {
        responseText = "We recommend our Brand Consultancy services and the Godrej Lakeside Orchard case study.";
        targets = ["brand-consultancy", "godrej-case-study"];
      } else if (
        query.includes("web") ||
        query.includes("ui") ||
        query.includes("ux") ||
        query.includes("app") ||
        query.includes("mobile") ||
        query.includes("design") ||
        query.includes("development")
      ) {
        responseText = "We recommend our Website UI/UX and Web/Mobile Application services, as well as the UnderNeat case study.";
        targets = ["website-ui-ux", "web-mobile-app", "underneat-case-study"];
      } else if (
        query.includes("marketing") ||
        query.includes("digital") ||
        query.includes("seo") ||
        query.includes("sem") ||
        query.includes("growth")
      ) {
        responseText = "We recommend our Digital Marketing and Influencer Marketing services, alongside our Uber for Business campaign strategy.";
        targets = ["digital-marketing", "influencer-marketing", "uber-case-study"];
      } else if (
        query.includes("video") ||
        query.includes("animation") ||
        query.includes("cgi") ||
        query.includes("3d") ||
        query.includes("2d") ||
        query.includes("motion")
      ) {
        responseText = "We recommend our Live Videos and 2D/3D Animation production services, alongside the Titan Flying Tourbillon project.";
        targets = ["live-videos", "animation-service", "titan-case-study"];
      } else if (query.includes("pr") || query.includes("public") || query.includes("reputation")) {
        responseText = "We recommend our PR (Public Relations) services to manage corporate reputation and build media authority.";
        targets = ["pr-service"];
      } else if (query.includes("godrej") || query.includes("real estate") || query.includes("lake") || query.includes("property")) {
        responseText = "Take a look at the Godrej Lakeside Orchard Case Study. We recommend our Brand Consultancy and CGI Animation services.";
        targets = ["godrej-case-study", "brand-consultancy", "animation-service"];
      } else if (query.includes("uber") || query.includes("mobility") || query.includes("travel")) {
        responseText = "Take a look at our Uber for Business Case Study. We recommend our Digital Marketing and PR services.";
        targets = ["uber-case-study", "digital-marketing", "pr-service"];
      } else if (query.includes("titan") || query.includes("watch") || query.includes("luxury")) {
        responseText = "Take a look at our Titan Flying Tourbillon Case Study. We recommend our 2D/3D Animation and Web UI/UX services.";
        targets = ["titan-case-study", "animation-service", "website-ui-ux"];
      } else {
        responseText = "Based on your goal, we recommend our Brand Consultancy and Digital Marketing services to drive engagement.";
        targets = ["brand-consultancy", "digital-marketing"];
      }

      setAiResponse(responseText);
      setHighlightedSections(targets);

      // Smooth scroll to target sections
      const targetId =
        targets.includes("godrej-case-study") ||
        targets.includes("uber-case-study") ||
        targets.includes("titan-case-study") ||
        targets.includes("underneat-case-study")
          ? "portfolio-section"
          : "services-section";

      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 1500);
  };

  // Preset tag click handler
  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    // Trigger search after state updates
    setTimeout(() => {
      const dummyEvent = { preventDefault: () => {} };
      setSearchQuery((currentQuery) => {
        // Run query with correct updated state
        setIsSearching(true);
        setAiResponse("");
        setHighlightedSections([]);
        
        setTimeout(() => {
          setIsSearching(false);
          const query = tag.toLowerCase();
          let responseText = "";
          let targets = [];

          if (query.includes("brand consultancy")) {
            responseText = "We recommend our Brand Consultancy service and the Godrej Lakeside Orchard case study.";
            targets = ["brand-consultancy", "godrej-case-study"];
          } else if (query.includes("website ui/ux")) {
            responseText = "We recommend our Website UI/UX service and the UnderNeat case study.";
            targets = ["website-ui-ux", "underneat-case-study"];
          } else if (query.includes("digital marketing")) {
            responseText = "We recommend our Digital Marketing and Influencer Marketing services.";
            targets = ["digital-marketing", "influencer-marketing"];
          } else if (query.includes("real estate")) {
            responseText = "We recommend our real estate branding. Check out the Godrej Lakeside Orchard case study.";
            targets = ["godrej-case-study", "brand-consultancy"];
          } else if (query.includes("mobility")) {
            responseText = "We recommend corporate mobility campaigns. Check out the Uber for Business case study.";
            targets = ["uber-case-study", "digital-marketing"];
          } else if (query.includes("fintech")) {
            responseText = "We recommend our Brand Consultancy and UI/UX design services for Fintech solutions.";
            targets = ["brand-consultancy", "website-ui-ux"];
          } else if (query.includes("apparel")) {
            responseText = "We recommend our Influencer Marketing and Branding. Check out UnderNeat by Kusha Kapila.";
            targets = ["underneat-case-study", "influencer-marketing"];
          } else if (query.includes("pr (public relations)")) {
            responseText = "We recommend our PR and reputation management services.";
            targets = ["pr-service"];
          } else if (query.includes("influencer marketing")) {
            responseText = "We recommend our Influencer Marketing and Live Video production services.";
            targets = ["influencer-marketing", "live-videos"];
          } else {
            responseText = `We recommend our specialized services in ${tag} and digital acceleration.`;
            targets = [];
          }

          setAiResponse(responseText);
          setHighlightedSections(targets);
          
          const targetId =
            targets.includes("godrej-case-study") ||
            targets.includes("uber-case-study") ||
            targets.includes("titan-case-study") ||
            targets.includes("underneat-case-study")
              ? "portfolio-section"
              : "services-section";

          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 1200);

        return tag;
      });
    }, 50);
  };

  // GSAP animations on mount
  useEffect(() => {
    // Staggered tag entry using GSAP
    if (tagsRef.current) {
      gsap.fromTo(
        tagsRef.current.children,
        { opacity: 0, scale: 0.9, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: "back.out(1.5)",
          delay: 0.8,
        }
      );
    }
  }, []);

  // Utility to check if a section is highlighted by the AI Discovery Assistant
  const getHighlightClass = (id) => {
    return highlightedSections.includes(id)
      ? "ring-2 ring-primary border-primary shadow-[0_0_25px_rgba(237,177,255,0.4)] scale-[1.03]"
      : "";
  };

  // Framer Motion entry configurations for sections
  const sectionReveal = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  const itemFadeRight = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  const itemFadeLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/15 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-primary/5">
        <div className="flex justify-between items-center h-20 px-8 md:px-margin-desktop max-w-container-max mx-auto">
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
              <DialogTrigger className="btn-gradient text-white font-bold px-6 md:px-8 py-2.5 md:py-3 rounded-full active:scale-95 transition-all text-[11px] md:text-label-sm font-label-sm uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-primary/45">
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
              className="md:hidden text-white w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-colors"
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

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-margin-mobile md:px-margin-desktop text-center max-w-container-max mx-auto flex flex-col items-center">
          <div className="absolute inset-0 hero-glow -z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest backdrop-blur-sm"
          >
            The Purple Sheeps of the Flock
          </motion.div>

          <h1
            className="font-headline-xl text-headline-lg-mobile md:text-headline-xl max-w-5xl mx-auto mb-8 text-white leading-[1.1] select-none"
          >
            {"How can we help grow your business today?".split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + idx * 0.06,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* AI Discovery Assistant */}
          <div className="w-full max-w-3xl mt-8 relative group z-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-tertiary to-secondary opacity-20 blur-2xl group-focus-within:opacity-40 transition-opacity"></div>
            
            <form
              onSubmit={handleAISearch}
              className="glass-panel aurora-input-glow relative flex items-center p-2 rounded-full border-primary/30"
            >
              <span className="material-symbols-outlined ml-4 text-primary" data-icon="auto_awesome">
                auto_awesome
              </span>
              
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-transparent border-none outline-none focus:ring-0 focus:border-none focus:outline-none px-4 py-3 font-body-lg text-body-lg text-white placeholder:text-on-surface-variant/40"
                placeholder="Tell us your goals (e.g., 'Launch a premium campaign for a real estate project')"
                type="text"
              />

              <button
                type="submit"
                disabled={isSearching}
                className="btn-gradient w-12 h-12 flex items-center justify-center rounded-full text-white hover:scale-110 active:scale-90 transition-transform shadow-lg disabled:opacity-50"
              >
                {isSearching ? (
                  <span className="material-symbols-outlined animate-spin" data-icon="sync">
                    sync
                  </span>
                ) : (
                  <span className="material-symbols-outlined" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                )}
              </button>
            </form>

            {/* AI Assistant Output Card */}
            <AnimatePresence>
              {aiResponse && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 rounded-xl glass-card border border-primary/40 text-left flex items-start gap-3 shadow-lg max-w-xl mx-auto"
                >
                  <span className="material-symbols-outlined text-primary text-xl" data-icon="auto_awesome">
                    auto_awesome
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-bold text-sm">AI Recommendation</p>
                      <button
                        onClick={() => {
                          setAiResponse("");
                          setHighlightedSections([]);
                        }}
                        className="text-on-surface-variant/50 hover:text-white text-xs ml-auto"
                      >
                        Clear
                      </button>
                    </div>
                    <p className="text-on-surface-variant text-sm mt-1">{aiResponse}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Category Filters / Industry Tags */}
            <div ref={tagsRef} className="flex flex-wrap justify-center gap-3 mt-10 max-w-4xl">
              {[
                "Brand Consultancy",
                "Website UI/UX",
                "Digital Marketing",
                "Real Estate",
                "F&B",
                "Mobility",
                "Fintech",
                "Apparel",
                "PR (Public Relations)",
                "Influencer Marketing",
              ].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="industry-tag px-5 py-2.5 glass-panel rounded-full border border-white/5 text-label-sm font-medium text-on-surface-variant hover:text-white transition-all duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
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

        {/* Our Story / DNA Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={itemFadeRight}>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our DNA</span>
              <h2 className="font-headline-xl text-5xl md:text-7xl text-white leading-tight mb-8">
                The <span className="text-gradient-aurora">Extra</span> in everything we do.
              </h2>
              <p className="text-on-surface-variant font-body-lg mb-10 leading-relaxed max-w-xl">
                At Moshi Moshi, we don't just follow trends—we define them. We are a team of creative rebels who
                believe that mediocrity is the biggest risk. Our philosophy is simple: be Extraordinary, be Extraverted,
                and be Extra Creative.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <motion.div whileHover={{ y: -6, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-1 cursor-default">
                  <h4 className="text-white font-bold text-xl mb-2">Extraordinary</h4>
                  <p className="text-on-surface-variant text-sm">Results that defy expectations and benchmarks.</p>
                </motion.div>
                <motion.div whileHover={{ y: -6, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-1 cursor-default">
                  <h4 className="text-white font-bold text-xl mb-2">Extraverted</h4>
                  <p className="text-on-surface-variant text-sm">Bold communication that demands attention.</p>
                </motion.div>
                <motion.div whileHover={{ y: -6, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-1 cursor-default">
                  <h4 className="text-white font-bold text-xl mb-2">Extra Creative</h4>
                  <p className="text-on-surface-variant text-sm">Thinking that starts where others stop.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div variants={itemFadeLeft} className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
              <motion.div
                whileHover={{ rotateY: 12, rotateX: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="glass-card rounded-2xl p-12 relative overflow-hidden aspect-square flex flex-col justify-center text-center cursor-pointer [perspective:1000px]"
              >
                <div className="text-[120px] font-black text-white/5 absolute -top-10 -left-10 select-none">EXTRA</div>
                <span className="material-symbols-outlined text-primary text-8xl mb-8">star_half</span>
                <h3 className="font-headline-lg text-white mb-4">Not just another agency.</h3>
                <p className="text-on-surface-variant">We are the purple sheeps of the flock, standing out by design.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Services Section */}
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
            {/* Brand Consultancy */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              id="brand-consultancy"
              className={`glass-card service-card-glow rounded-xl p-8 group hover:border-primary/50 transition-all duration-500 cursor-pointer ${getHighlightClass(
                "brand-consultancy"
              )}`}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                dynamic_form
              </span>
              <h3 className="font-headline-md text-white mb-3 text-xl">Brand Consultancy</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Strategic positioning and identity creation for brands that want to lead.
              </p>
            </motion.div>

            {/* Website UI/UX */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              id="website-ui-ux"
              className={`glass-card service-card-glow rounded-xl p-8 group hover:border-primary/50 transition-all duration-500 cursor-pointer ${getHighlightClass(
                "website-ui-ux"
              )}`}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                web
              </span>
              <h3 className="font-headline-md text-white mb-3 text-xl">Website UI/UX</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Crafting immersive digital experiences that convert visitors into advocates.
              </p>
            </motion.div>

            {/* Web/Mobile Application */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              id="web-mobile-app"
              className={`glass-card service-card-glow rounded-xl p-8 group hover:border-primary/50 transition-all duration-500 cursor-pointer ${getHighlightClass(
                "web-mobile-app"
              )}`}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                developer_mode
              </span>
              <h3 className="font-headline-md text-white mb-3 text-xl">Web/Mobile Application</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                End-to-end development of high-performance progressive web and mobile apps.
              </p>
            </motion.div>

            {/* Digital Marketing */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              id="digital-marketing"
              className={`glass-card service-card-glow rounded-xl p-8 group hover:border-primary/50 transition-all duration-500 cursor-pointer ${getHighlightClass(
                "digital-marketing"
              )}`}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                campaign
              </span>
              <h3 className="font-headline-md text-white mb-3 text-xl">Digital Marketing</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Data-driven growth strategies through SEO, SEM, and performance marketing.
              </p>
            </motion.div>

            {/* Live Videos */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              id="live-videos"
              className={`glass-card service-card-glow rounded-xl p-8 group hover:border-primary/50 transition-all duration-500 cursor-pointer ${getHighlightClass(
                "live-videos"
              )}`}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                videocam
              </span>
              <h3 className="font-headline-md text-white mb-3 text-xl">Live Videos</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Professional video production that tells your story with cinematic impact.
              </p>
            </motion.div>

            {/* 2D/3D Animation */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              id="animation-service"
              className={`glass-card service-card-glow rounded-xl p-8 group hover:border-primary/50 transition-all duration-500 cursor-pointer ${getHighlightClass(
                "animation-service"
              )}`}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                animation
              </span>
              <h3 className="font-headline-md text-white mb-3 text-xl">2D/3D Animation</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Breathing life into concepts with state-of-the-art motion graphics and CGI.
              </p>
            </motion.div>

            {/* PR (Public Relations) */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              id="pr-service"
              className={`glass-card service-card-glow rounded-xl p-8 group hover:border-primary/50 transition-all duration-500 cursor-pointer ${getHighlightClass(
                "pr-service"
              )}`}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                public
              </span>
              <h3 className="font-headline-md text-white mb-3 text-xl">PR (Public Relations)</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Managing reputation and building authority through strategic media outreach.
              </p>
            </motion.div>

            {/* Influencer Marketing */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              id="influencer-marketing"
              className={`glass-card service-card-glow rounded-xl p-8 group hover:border-primary/50 transition-all duration-500 cursor-pointer ${getHighlightClass(
                "influencer-marketing"
              )}`}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                groups
              </span>
              <h3 className="font-headline-md text-white mb-3 text-xl">Influencer Marketing</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Connecting your brand with authentic voices that resonate with your audience.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Recommendations Section (Expect the Extra Portfolio) */}
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

        {/* Testimonials Section (Rumours) */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-32 bg-surface-container-lowest relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/10 rounded-full blur-[150px]"
            animate={{
              x: [0, -50, 30, 0],
              y: [0, 40, -30, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 text-center">
            <motion.span variants={itemFadeUp} className="material-symbols-outlined text-primary text-7xl mb-10 opacity-50 block">
              format_quote
            </motion.span>
            <div className="max-w-4xl mx-auto">
              <motion.h2 variants={itemFadeUp} className="font-headline-xl text-3xl md:text-5xl text-white leading-tight italic font-light">
                "Moshi Moshi is a trusted digital marketing partner for Increff. The team is very hardworking, competent
                and have done a fine job in executing our critical projects."
              </motion.h2>
              <motion.div variants={itemFadeUp} className="mt-16 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border-2 border-primary/30 p-1 mb-6">
                  <div className="w-full h-full bg-surface-bright rounded-full flex items-center justify-center font-bold text-primary text-xl">
                    MR
                  </div>
                </div>
                <p className="font-headline-md text-white text-2xl mb-1">Manish Raval</p>
                <p className="text-tertiary font-label-sm tracking-[0.2em] uppercase">Increff</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Insights Section */}
        <motion.section
          id="insights-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden"
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
            {/* Blog Post 1 */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="p-8 glass-card rounded-xl group cursor-pointer"
            >
              <div className="mb-6 text-tertiary font-label-sm uppercase tracking-widest">Strategy • 2026</div>
              <h3 className="font-headline-md text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                Unlocking the Power of Social Media Marketing for Indian Brands
              </h3>
              <p className="text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                The virtual world is becoming increasingly noisy. Visibility has become the prime necessity of every
                modern-day business in this digital era...
              </p>
              <div className="flex items-center text-primary font-bold gap-2">
                Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </motion.div>

            {/* Blog Post 2 */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="p-8 glass-card rounded-xl group cursor-pointer"
            >
              <div className="mb-6 text-tertiary font-label-sm uppercase tracking-widest">Trends • 2026</div>
              <h3 className="font-headline-md text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                Top 10 Best Marketing Strategies for Businesses in 2026
              </h3>
              <p className="text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                This is the era when everything in marketing should be relevant to customers in terms of the AI-based
                marketing approach...
              </p>
              <div className="flex items-center text-primary font-bold gap-2">
                Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </motion.div>

            {/* Blog Post 3 */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="p-8 glass-card rounded-xl group cursor-pointer"
            >
              <div className="mb-6 text-tertiary font-label-sm uppercase tracking-widest">Advertising • 2026</div>
              <h3 className="font-headline-md text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                Decoding the Costliest Ads in the History of Advertising
              </h3>
              <p className="text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                From Super Bowl slots to global TV takeovers, we analyze what makes these massive investments worth every
                penny for the world's elite brands...
              </p>
              <div className="flex items-center text-primary font-bold gap-2">
                Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured In Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-24 bg-surface/5 border-y border-white/5 overflow-hidden"
        >
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <motion.p variants={itemFadeUp} className="text-center font-label-sm text-white/80 uppercase tracking-[0.2em] mb-12">Featured In</motion.p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              <motion.div variants={itemFadeUp} className="flex items-center opacity-60 hover:opacity-100 transition-all h-8">
                <span className="text-white font-bold text-lg tracking-tight select-none">Brand Equity</span>
              </motion.div>
              <motion.div variants={itemFadeUp} className="flex items-center opacity-60 hover:opacity-100 transition-all h-8">
                <span className="text-white font-bold text-2xl italic select-none font-serif">afaqs!</span>
              </motion.div>
              <motion.div variants={itemFadeUp} className="flex items-center opacity-60 hover:opacity-100 transition-all h-8">
                <span className="text-white font-bold text-xl uppercase tracking-tighter select-none">ADGULLY</span>
              </motion.div>
              <motion.div variants={itemFadeUp} className="flex items-center opacity-60 hover:opacity-100 transition-all h-8">
                <span className="text-white font-medium text-lg select-none">MediaNews4U</span>
              </motion.div>
              <motion.div variants={itemFadeUp} className="flex items-center opacity-60 hover:opacity-100 transition-all h-8">
                <span className="text-white font-bold text-xl select-none">Business Standard</span>
              </motion.div>
              <motion.div variants={itemFadeUp} className="flex items-center opacity-60 hover:opacity-100 transition-all h-8">
                <span className="text-white font-bold text-lg uppercase tracking-widest select-none">
                  Financial Express
                </span>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
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
              {/* Quote trigger button */}
              <Dialog>
                <DialogTrigger className="btn-gradient text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20">
                  Contact Us
                </DialogTrigger>
                {/* Reusing same quote modal */}
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
      </main>

      {/* Comprehensive Footer */}
      <footer className="bg-surface-container-lowest w-full pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 px-8 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="lg:col-span-2">
            <MoshiMoshiLogo className="h-10 mb-8 w-auto" />
            <p className="text-on-surface-variant font-body-md mb-10 leading-relaxed max-w-md">
              Pioneering AI-native marketing strategies. If it's extraordinary, extraverted and extra creative it's Moshi
              Moshi. We bridge the gap between creative storytelling and technical excellence.
            </p>
            <div className="flex gap-4">
              <a
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
              <a
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
              <a
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">smart_display</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-5">
            <p className="font-bold text-white font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4">Agency</p>
            <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">
              About Us
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">
              Our Story
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">
              The Purple Sheep
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">
              Careers
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">
              AI Ethics
            </a>
          </div>
          
          <div className="flex flex-col gap-5">
            <p className="font-bold text-white font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4">Services</p>
            <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#services-section">
              Brand Consultancy
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#services-section">
              Website UI/UX
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#services-section">
              Digital Marketing
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#services-section">
              PR (Public Relations)
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#services-section">
              Influencer Marketing
            </a>
          </div>
          
          <div className="flex flex-col gap-5">
            <p className="font-bold text-white font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4">Offices</p>
            <div className="mb-4">
              <p className="text-white text-sm font-semibold mb-1">Bengaluru (HQ)</p>
              <p className="text-on-surface-variant text-xs leading-relaxed">Indiranagar, Bangalore, Karnataka 560038</p>
            </div>
            <div className="mb-4">
              <p className="text-white text-sm font-semibold mb-1">Gurugram</p>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                Cyber City, DLF Phase 3, Gurugram, Haryana
              </p>
            </div>
            <div className="mb-4">
              <p className="text-white text-sm font-semibold mb-1">Mumbai</p>
              <p className="text-on-surface-variant text-xs leading-relaxed">
                Bandra West, Mumbai, Maharashtra 400050
              </p>
            </div>
          </div>
        </div>
        
        <div className="px-8 md:px-margin-desktop w-full max-w-container-max mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-on-surface-variant/40 font-label-sm text-label-sm gap-4">
          <p>© 2026 Moshi Moshi AI. Beyond the Horizon.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
            <div className="flex items-center gap-2">
              <span className="text-primary uppercase tracking-widest font-bold">Expect the Extra</span>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(237,177,255,0.8)]"></span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
