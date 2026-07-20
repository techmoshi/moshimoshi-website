"use client";

import MoshiMoshiLogo from "@/components/MoshiMoshiLogo";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-24 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 px-5 md:px-20 max-w-container-max mx-auto">
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
      
      <div className="px-5 md:px-20 w-full max-w-container-max mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-on-surface-variant/40 font-label-sm text-label-sm gap-4">
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
  );
}
