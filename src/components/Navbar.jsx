"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const servicesList = [
  {
    title: "Brand Consultancy",
    slug: "branding-company-india",
    description: "Logo design, visual guidelines, and brand strategy.",
    icon: "palette",
  },
  {
    title: "Website UI/UX & Development",
    slug: "web-development-design-company-india",
    description: "Custom aesthetic websites and responsive user experiences.",
    icon: "code",
  },
  {
    title: "Progressive Web Apps",
    slug: "progressive-web-apps-development",
    description: "High-performance app-like mobile web platforms.",
    icon: "install_mobile",
  },
  {
    title: "Digital Marketing Agency",
    slug: "digital-marketing-services-india",
    description: "SEO, search campaigns, performance & content marketing.",
    icon: "campaign",
  },
  {
    title: "Video Production",
    slug: "video-production-company-india",
    description: "Cinematic corporate films, ads & brand shoots.",
    icon: "movie",
  },
  {
    title: "Animated Explainer Videos",
    slug: "animated-explainer-video",
    description: "2D/3D explainer motions simplifying complex ideas.",
    icon: "draw",
  },
  {
    title: "PR & Public Relations",
    slug: "pr-agencies",
    description: "Press releases, crisis response & media outreach.",
    icon: "newspaper",
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
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
    <Dialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen}>
      <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/15 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-primary/5">
      <div className="flex justify-between items-center h-20 px-8 md:px-margin-desktop max-w-container-max mx-auto">
        <Link href="/" className="flex items-center">
          <MoshiMoshiLogo className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-body-md text-body-md transition-colors ${
              pathname === "/"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-body-md text-body-md transition-colors ${
              pathname === "/about"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className={`font-body-md text-body-md transition-colors ${
              pathname === "/careers"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Careers
          </Link>
          {/* Services Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesHovered(true)}
            onMouseLeave={() => setServicesHovered(false)}
          >
            <button
              className={`text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md flex items-center gap-1 py-4 cursor-pointer focus:outline-none ${
                servicesHovered ? "text-primary font-semibold" : ""
              }`}
            >
              Services
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${
                servicesHovered ? "rotate-180 text-primary" : ""
              }`} style={{ fontVariationSettings: "'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24" }}>
                keyboard_arrow_down
              </span>
            </button>

            <AnimatePresence>
              {servicesHovered && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-surface-container/95 border border-primary/20 rounded-2xl shadow-2xl p-6 backdrop-blur-3xl z-50 grid grid-cols-2 gap-4"
                  style={{ transformOrigin: "top center" }}
                >
                  {/* Subtle decorative background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5 rounded-2xl pointer-events-none" />

                  {servicesList.map((service) => (
                    <motion.div key={service.slug} variants={itemVariants}>
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={() => setServicesHovered(false)}
                        className="flex gap-4 p-3 rounded-xl border border-transparent hover:border-primary/10 hover:bg-white/5 group transition-all duration-300 relative z-10"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                          <span className="material-symbols-outlined text-xl">{service.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-semibold group-hover:text-primary transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-[11px] text-on-surface-variant mt-0.5 leading-normal">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/contact"
            className={`font-body-md text-body-md transition-colors ${
              pathname === "/contact"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Request a Quote Button - Triggers Shadcn Dialog */}
          <DialogTrigger className="hidden md:inline-block btn-gradient text-white font-bold px-4 md:px-8 py-2 md:py-3 rounded-full active:scale-95 transition-all text-[10px] md:text-label-sm font-label-sm uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-primary/45 whitespace-nowrap shrink-0">
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
              <Link
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-body-md transition-colors ${
                  pathname === "/" ? "text-primary font-bold" : "text-on-surface-variant hover:text-on-surface"
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-body-md transition-colors ${
                  pathname === "/about" ? "text-primary font-bold" : "text-on-surface-variant hover:text-on-surface"
                }`}
                href="/about"
              >
                About Us
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-body-md transition-colors ${
                  pathname === "/careers" ? "text-primary font-bold" : "text-on-surface-variant hover:text-on-surface"
                }`}
                href="/careers"
              >
                Careers
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-surface-variant hover:text-on-surface text-lg font-body-md transition-colors"
                href="/#services-section"
              >
                Services
              </Link>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-body-md transition-colors ${
                  pathname === "/contact" ? "text-primary font-bold" : "text-on-surface-variant hover:text-on-surface"
                }`}
                href="/contact"
              >
                Contact Us
              </Link>
              <DialogTrigger
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center btn-gradient text-white font-bold px-8 py-3 rounded-full active:scale-95 transition-all text-sm font-label-sm uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-primary/45 mt-4 cursor-pointer"
              >
                Request a Quote
              </DialogTrigger>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  </Dialog>
  );
}
