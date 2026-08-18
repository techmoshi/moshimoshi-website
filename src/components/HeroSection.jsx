"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function HeroSection({ onHighlightSections }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showAICard, setShowAICard] = useState(false);
  const [highlightedSections, setHighlightedSections] = useState([]);
  const [mounted, setMounted] = useState(false);
  const tagsRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Notify parent of highlighted sections changes
  useEffect(() => {
    if (onHighlightSections) {
      onHighlightSections(highlightedSections);
    }
  }, [highlightedSections, onHighlightSections]);

  // GSAP animations on mount
  useEffect(() => {
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

  // Post prompt to Dante AI iframe in Home Banner
  const sendPromptToDante = (queryText) => {
    if (!queryText) return;
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          { type: "dante:send-prompt", text: queryText },
          "*"
        );
      }
    } catch (_err) {
      console.log("Could not postMessage to Dante iframe", _err);
    }
  };

  // Listen for iframe ready event to send active query
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.type === "dante:ready") {
        if (activeQuery) {
          sendPromptToDante(activeQuery);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [activeQuery]);

  // Helper to trigger Dante AI response & target highlights in Home Banner
  const triggerDanteAIResponse = (queryText) => {
    if (!queryText || !queryText.trim()) return;

    const trimmedQuery = queryText.trim();
    setIsSearching(true);
    setShowAICard(true);
    setActiveQuery(trimmedQuery);

    // Determine target highlighted sections for scrolling
    const query = trimmedQuery.toLowerCase();
    let targets = [];
    if (query.includes("brand") || query.includes("identity") || query.includes("consult")) {
      targets = ["brand-consultancy", "godrej-case-study"];
    } else if (query.includes("web") || query.includes("ui") || query.includes("ux") || query.includes("app")) {
      targets = ["website-ui-ux", "web-mobile-app", "underneat-case-study"];
    } else if (query.includes("marketing") || query.includes("digital") || query.includes("seo")) {
      targets = ["digital-marketing", "influencer-marketing", "uber-case-study"];
    } else if (query.includes("video") || query.includes("animation") || query.includes("3d") || query.includes("cgi")) {
      targets = ["live-videos", "animation-service", "titan-case-study"];
    } else if (query.includes("pr") || query.includes("public")) {
      targets = ["pr-service"];
    } else {
      targets = ["brand-consultancy", "digital-marketing"];
    }
    setHighlightedSections(targets);

    // Dispatch prompt to Dante AI iframe
    setTimeout(() => {
      sendPromptToDante(trimmedQuery);
      setIsSearching(false);
    }, 400);
  };

  const handleAISearch = (e) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;
    triggerDanteAIResponse(searchQuery);
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    triggerDanteAIResponse(tag);
  };

  const handleScrollToTarget = (targetId) => {
    const sectionId = targetId.includes("case-study") ? "portfolio-section" : "services-section";
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="relative min-h-screen w-full px-5 md:px-20 text-center flex flex-col items-center justify-center py-20">
      <div className="absolute inset-0 hero-glow -z-10 "></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest backdrop-blur-sm"
      >
        The Purple Sheeps of the Flock
      </motion.div>

      <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl max-w-5xl mx-auto mb-8 text-white leading-[1.1] select-none">
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

      {/* AI Discovery Assistant Form */}
      <div className="w-full max-w-3xl mt-4 relative group z-20">
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
            className="flex-grow w-full bg-transparent border-none outline-none focus:ring-0 focus:border-none focus:outline-none px-2 md:px-4 py-3 text-sm md:text-body-lg font-body-md md:font-body-lg text-white placeholder:text-on-surface-variant/40 truncate"
            placeholder="Tell us your goals..."
            type="text"
          />

          <button
            type="submit"
            disabled={isSearching}
            className="btn-gradient w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white hover:scale-110 active:scale-90 transition-transform shadow-lg disabled:opacity-50 shrink-0"
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

        {/* Custom Moshi Moshi Glassmorphic AI Strategy Card running Dante AI */}
        <AnimatePresence>
          {showAICard && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 w-full max-w-2xl mx-auto rounded-3xl glass-card border border-primary/30 shadow-2xl p-5 md:p-6 text-left relative overflow-hidden backdrop-blur-2xl"
            >
              {/* Background Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* Moshi Moshi Custom Card Header */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary via-tertiary to-secondary p-0.5 shadow-lg flex items-center justify-center">
                    <div className="w-full h-full bg-[#101221] rounded-[14px] flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-xl" data-icon="auto_awesome">
                        auto_awesome
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-base tracking-tight">Moshi Moshi AI Strategy Engine</h3>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                        Live Strategy Engine
                      </span>
                    </div>
                    {activeQuery && (
                      <p className="text-on-surface-variant/70 text-xs mt-0.5 truncate max-w-md">
                        Goal: &quot;{activeQuery}&quot;
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowAICard(false);
                    setHighlightedSections([]);
                  }}
                  className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-white flex items-center justify-center transition-colors border border-white/10 shrink-0"
                  title="Dismiss Strategy Card"
                >
                  <span className="material-symbols-outlined text-base" data-icon="close">
                    close
                  </span>
                </button>
              </div>

              {/* Moshi Moshi Proprietary Engine Panel */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#101221] border border-white/10 shadow-inner">
                <iframe
                  ref={iframeRef}
                  src="https://www.dante-ai.com/widget/panel?agentId=d3d5df1e-e725-43da-b551-b98905bd3953&key=wk_mkEFmBJ6j1PV4hPvXuvTRQoQZDNoYIDf"
                  title="Moshi Moshi AI Strategy Engine"
                  allow="microphone"
                  className="w-full h-[450px] border-0 rounded-2xl dante-dark-engine"
                />
              </div>

              {/* Interactive Action Badges */}
              {highlightedSections.length > 0 && (
                <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between flex-wrap gap-3">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm" data-icon="ads_click">
                      ads_click
                    </span>
                    Explore Recommended Services &amp; Portfolio
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {highlightedSections.map((target) => (
                      <button
                        key={target}
                        onClick={() => handleScrollToTarget(target)}
                        className="px-3.5 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary text-xs font-medium flex items-center gap-1.5 transition-all duration-200 hover:scale-105 shadow-sm"
                      >
                        <span>View {target.replace("-service", "").replace("-case-study", "").replace(/-/g, " ")}</span>
                        <span className="material-symbols-outlined text-xs" data-icon="arrow_downward">
                          arrow_downward
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filters / Industry Tags */}
        <div ref={tagsRef} className="flex flex-wrap justify-center gap-3 mt-8 max-w-4xl">
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
  );
}
