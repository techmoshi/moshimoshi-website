import Link from "next/link";
import MoshiMoshiLogo from "@/components/MoshiMoshiLogo";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-16 md:pt-24 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 px-5 md:px-20 max-w-container-max mx-auto">
        <div className="lg:col-span-2">
          <MoshiMoshiLogo className="h-10 mb-8 w-auto" />
          <p className="text-on-surface-variant font-body-md mb-10 leading-relaxed max-w-md">
            Pioneering AI-native marketing strategies. If it's extraordinary, extraverted and extra creative it's Moshi
            Moshi. We bridge the gap between creative storytelling and technical excellence.
          </p>
          <div className="flex gap-4">
            <a
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:scale-110 transition-all cursor-pointer"
              href="https://www.instagram.com/saymoshimoshi"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:scale-110 transition-all cursor-pointer"
              href="https://www.youtube.com/@moshimoshi748"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 hover:scale-110 transition-all cursor-pointer"
              href="https://www.linkedin.com/company/saymoshimoshi"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-5">
          <p className="font-bold text-white font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4">Agency</p>
          <Link className="text-on-surface-variant hover:text-primary transition-all text-sm" href="/about">
            About Us
          </Link>
          <Link className="text-on-surface-variant hover:text-primary transition-all text-sm" href="/about">
            Our Story
          </Link>
          <Link className="text-on-surface-variant hover:text-primary transition-all text-sm" href="/about">
            The Purple Sheep
          </Link>
          <Link className="text-on-surface-variant hover:text-primary transition-all text-sm" href="/careers">
            Careers
          </Link>
          <Link className="text-on-surface-variant hover:text-primary transition-all text-sm" href="/about">
            AI Ethics
          </Link>
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
            <p className="text-on-surface-variant text-xs leading-relaxed">
              130, 33rd Cross Rd, 4th T Block East, Jayanagar 3rd Block East, Jayanagar, Bengaluru, Karnataka 560011
            </p>
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
