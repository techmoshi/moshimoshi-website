"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Chat Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative group w-14 h-14 md:w-16 md:h-16 rounded-full btn-gradient p-0.5 shadow-2xl flex items-center justify-center text-white cursor-pointer"
        aria-label="Toggle Normal AI Chat Widget"
      >
        {/* Ambient Pulsing Aura */}
        <span className="absolute -inset-1 bg-gradient-to-r from-primary via-tertiary to-secondary rounded-full opacity-60 blur-lg group-hover:opacity-100 transition-opacity animate-pulse"></span>

        <div className="relative w-full h-full bg-[#101221] rounded-full flex items-center justify-center text-white border border-white/20">
          {isOpen ? (
            <span className="material-symbols-outlined text-2xl md:text-3xl" data-icon="close">
              close
            </span>
          ) : (
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl md:text-3xl text-primary" data-icon="chat">
                chat
              </span>
              {/* Online Green Badge */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#101221] animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#101221]"></span>
            </div>
          )}
        </div>
      </motion.button>

      {/* Normal Floating Chat Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 right-0 w-[90vw] max-w-[420px] h-[580px] rounded-3xl glass-card border border-primary/40 shadow-2xl overflow-hidden flex flex-col backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-[#101221]/90 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-tertiary flex items-center justify-center text-white shadow-md">
                  <span className="material-symbols-outlined text-lg" data-icon="smart_toy">
                    smart_toy
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-bold text-sm tracking-wide">Moshi Moshi AI Chat</h4>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Online
                    </span>
                  </div>
                  <p className="text-on-surface-variant/70 text-[11px] mt-0.5">
                    Ask anything about our services &amp; projects
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-on-surface-variant hover:text-white flex items-center justify-center transition-colors border border-white/10"
                title="Close Normal Chat"
              >
                <span className="material-symbols-outlined text-sm" data-icon="close">
                  close
                </span>
              </button>
            </div>

            {/* Moshi Moshi AI Chat Engine Body */}
            <div className="flex-grow w-full bg-[#101221] relative overflow-hidden">
              <iframe
                src="https://www.dante-ai.com/widget/panel?agentId=d3d5df1e-e725-43da-b551-b98905bd3953&key=wk_mkEFmBJ6j1PV4hPvXuvTRQoQZDNoYIDf"
                title="Moshi Moshi AI Assistant Chat"
                allow="microphone"
                className="w-full h-full border-0 dante-dark-engine"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
