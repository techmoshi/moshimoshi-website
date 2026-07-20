"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function HeroSection({ onHighlightSections }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [highlightedSections, setHighlightedSections] = useState([]);
  const tagsRef = useRef(null);

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

  // AI search submission handler
  const handleAISearch = (e) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setAiResponse("");
    setHighlightedSections([]);

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
    setTimeout(() => {
      setSearchQuery((currentQuery) => {
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

  return (
    <section className="relative pt-40 pb-20 px-5 md:px-20 text-center max-w-container-max mx-auto flex flex-col items-center">
      <div className="absolute inset-0 hero-glow -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest backdrop-blur-sm"
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
  );
}
