"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useVelocity, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Lenis from "lenis";

// Load WebGL ThreeDOrb dynamically to prevent server hydration mismatch
const ThreeDOrb = dynamic(() => import("@/components/ui/ThreeDOrb"), { ssr: false });

// 15 Service entries for the circular molecular flower clump
const SERVICES = [
  {
    title: "Corporate Branding",
    label: "BRAND",
    desc: "Shaping recognition and trust through modern corporate design, logos, and identity systems.",
    slug: "branding-company-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvo3wbuUuD8KX8kR1giRtWpxaV6WRQ5V_2Sar7tl72EpRvslE2n-zaFn8m2VfJR59n7_gK9-euHKkvEQU1gnTqjBcWknotPUKFSMkeeyW9fFRwcAU2lnYY-kwoVh8Nt_xqWgk6F92voMLoawF8rFcnCRrOamZk63I6bJS9vA45cVk4BbT2HYjCz7hMk1OmMsVBwFINaBD-xiz0yT4jY9sPDVhIS00w40-Mw5e49PxZaXp56I90X50axX-g-mUwlgeFmJrE8laj9Q",
    color: "border-primary/45 shadow-primary/25",
    textColor: "text-primary",
    sizeClass: "w-24 h-24 md:w-[105px] md:h-[105px]"
  },
  {
    title: "Digital Marketing",
    label: "MARKETING",
    desc: "AI-native SEO, performance media, social growth, and content marketing systems built for business outcomes.",
    slug: "digital-marketing-services-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuZaT68NKd4_OEU8_3FDbawWfEGiAQL_1RmzHBSE3_2ys8wuS1up3mrL1EY8dIuOQ3z7UkcJJj7H0AebS6U_XnvxoenV7qlI2MCJeOaITq5QnD81i9zeerw8r6HOm9vgC9y4QrQDiTPi-udZiGOT_Zu34BRIb_L-xqkgnqxUDWJYoVOobwdccLq8QlHartG_15-p_E56kut2ktSohuEQc1qINwHMtjJwDgLXatnIxsLtD8lGEPBH9-5wPfXQ0fXgYz43TeBxrXjXw",
    color: "border-[#00dce6]/45 shadow-[#00dce6]/25",
    textColor: "text-[#00dce6]",
    sizeClass: "w-20 h-20 md:w-[92px] md:h-[92px]"
  },
  {
    title: "Web Development",
    label: "DEV/CODE",
    desc: "Building high-performance Next.js websites, custom shaders, and interactive frontend modules.",
    slug: "web-development-design-company-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZCdyBPqhauvCehjeji7mJaw8uXTI3ScFTjBiDE7opnEF5e2DOe_1atseK5DoaPLYJaevVU80Yrqlok4vmm8mdM8zQZzVzACSJx8dksy2uom05QPQcA2MIZW0Xpa2FLeSvEimSj5AlrHx8C30ADtwh4PdyjQAOo7Mim8NNPdu6ne38VpC-yWyW2GxoNlqSlb2NROvzIfKg8CT-UzNqRLwj6E2dDs5fF99P7Zu6e7MFwuHXGFuu8lX0c8zaTgohil3_RASxJGRRUw",
    color: "border-secondary/45 shadow-secondary/25",
    textColor: "text-secondary",
    sizeClass: "w-28 h-28 md:w-[115px] md:h-[115px]"
  },
  {
    title: "Creative Strategy",
    label: "STRAT/ART",
    desc: "Integrating visual artwork, copywriting, and storytelling campaigns that set your brand apart.",
    slug: "digital-marketing-services-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvo3wbuUuD8KX8kR1giRtWpxaV6WRQ5V_2Sar7tl72EpRvslE2n-zaFn8m2VfJR59n7_gK9-euHKkvEQU1gnTqjBcWknotPUKFSMkeeyW9fFRwcAU2lnYY-kwoVh8Nt_xqWgk6F92voMLoawF8rFcnCRrOamZk63I6bJS9vA45cVk4BbT2HYjCz7hMk1OmMsVBwFINaBD-xiz0yT4jY9sPDVhIS00w40-Mw5e49PxZaXp56I90X50axX-g-mUwlgeFmJrE8laj9Q",
    color: "border-white/30 shadow-white/10",
    textColor: "text-white",
    sizeClass: "w-18 h-18 md:w-[82px] md:h-[82px]"
  },
  {
    title: "CGI & 3D Motion",
    label: "CGI/3D",
    desc: "Warping physical space with high-fidelity 2D/3D renders and animations designed for maximum visual attention.",
    slug: "branding-company-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvo3wbuUuD8KX8kR1giRtWpxaV6WRQ5V_2Sar7tl72EpRvslE2n-zaFn8m2VfJR59n7_gK9-euHKkvEQU1gnTqjBcWknotPUKFSMkeeyW9fFRwcAU2lnYY-kwoVh8Nt_xqWgk6F92voMLoawF8rFcnCRrOamZk63I6bJS9vA45cVk4BbT2HYjCz7hMk1OmMsVBwFINaBD-xiz0yT4jY9sPDVhIS00w40-Mw5e49PxZaXp56I90X50axX-g-mUwlgeFmJrE8laj9Q",
    color: "border-primary/45 shadow-primary/25",
    textColor: "text-primary",
    sizeClass: "w-22 h-22 md:w-[100px] md:h-[100px]"
  },
  {
    title: "Social Media Campaigns",
    label: "SOCIAL/PR",
    desc: "Create social media campaigns that drive community engagement and build brand awareness.",
    slug: "digital-marketing-services-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuZaT68NKd4_OEU8_3FDbawWfEGiAQL_1RmzHBSE3_2ys8wuS1up3mrL1EY8dIuOQ3z7UkcJJj7H0AebS6U_XnvxoenV7qlI2MCJeOaITq5QnD81i9zeerw8r6HOm9vgC9y4QrQDiTPi-udZiGOT_Zu34BRIb_L-xqkgnqxUDWJYoVOobwdccLq8QlHartG_15-p_E56kut2ktSohuEQc1qINwHMtjJwDgLXatnIxsLtD8lGEPBH9-5wPfXQ0fXgYz43TeBxrXjXw",
    color: "border-[#00dce6]/45 shadow-[#00dce6]/25",
    textColor: "text-[#00dce6]",
    sizeClass: "w-20 h-20 md:w-[90px] md:h-[90px]"
  },
  {
    title: "Performance Advertising",
    label: "ADS/PPC",
    desc: "Developing data-driven advertising campaigns focused on lead generation and acquisition.",
    slug: "digital-marketing-services-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZCdyBPqhauvCehjeji7mJaw8uXTI3ScFTjBiDE7opnEF5e2DOe_1atseK5DoaPLYJaevVU80Yrqlok4vmm8mdM8zQZzVzACSJx8dksy2uom05QPQcA2MIZW0Xpa2FLeSvEimSj5AlrHx8C30ADtwh4PdyjQAOo7Mim8NNPdu6ne38VpC-yWyW2GxoNlqSlb2NROvzIfKg8CT-UzNqRLwj6E2dDs5fF99P7Zu6e7MFwuHXGFuu8lX0c8zaTgohil3_RASxJGRRUw",
    color: "border-secondary/45 shadow-secondary/25",
    textColor: "text-secondary",
    sizeClass: "w-24 h-24 md:w-[105px] md:h-[105px]"
  },
  {
    title: "Creative Strategy & Copy",
    label: "COPY/STRAT",
    desc: "Formulating compelling brand messaging, positioning, and copywriting that connect with human audiences.",
    slug: "branding-company-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvo3wbuUuD8KX8kR1giRtWpxaV6WRQ5V_2Sar7tl72EpRvslE2n-zaFn8m2VfJR59n7_gK9-euHKkvEQU1gnTqjBcWknotPUKFSMkeeyW9fFRwcAU2lnYY-kwoVh8Nt_xqWgk6F92voMLoawF8rFcnCRrOamZk63I6bJS9vA45cVk4BbT2HYjCz7hMk1OmMsVBwFINaBD-xiz0yT4jY9sPDVhIS00w40-Mw5e49PxZaXp56I90X50axX-g-mUwlgeFmJrE8laj9Q",
    color: "border-white/30 shadow-white/10",
    textColor: "text-white",
    sizeClass: "w-18 h-18 md:w-[80px] md:h-[80px]"
  },
  {
    title: "Search Engine Optimization",
    label: "SEO/AUDIT",
    desc: "Optimizing code architecture and layout visibility keywords to secure premium Google SERP indexing.",
    slug: "digital-marketing-services-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuZaT68NKd4_OEU8_3FDbawWfEGiAQL_1RmzHBSE3_2ys8wuS1up3mrL1EY8dIuOQ3z7UkcJJj7H0AebS6U_XnvxoenV7qlI2MCJeOaITq5QnD81i9zeerw8r6HOm9vgC9y4QrQDiTPi-udZiGOT_Zu34BRIb_L-xqkgnqxUDWJYoVOobwdccLq8QlHartG_15-p_E56kut2ktSohuEQc1qINwHMtjJwDgLXatnIxsLtD8lGEPBH9-5wPfXQ0fXgYz43TeBxrXjXw",
    color: "border-[#00dce6]/45 shadow-[#00dce6]/25",
    textColor: "text-[#00dce6]",
    sizeClass: "w-20 h-20 md:w-[94px] md:h-[94px]"
  },
  {
    title: "Brand Style Guides",
    label: "GUIDELINES",
    desc: "Publishing detailed brand manuals, color palettes, visual hierarchies, and typographic rules.",
    slug: "branding-company-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvo3wbuUuD8KX8kR1giRtWpxaV6WRQ5V_2Sar7tl72EpRvslE2n-zaFn8m2VfJR59n7_gK9-euHKkvEQU1gnTqjBcWknotPUKFSMkeeyW9fFRwcAU2lnYY-kwoVh8Nt_xqWgk6F92voMLoawF8rFcnCRrOamZk63I6bJS9vA45cVk4BbT2HYjCz7hMk1OmMsVBwFINaBD-xiz0yT4jY9sPDVhIS00w40-Mw5e49PxZaXp56I90X50axX-g-mUwlgeFmJrE8laj9Q",
    color: "border-primary/45 shadow-primary/25",
    textColor: "text-primary",
    sizeClass: "w-24 h-24 md:w-[108px] md:h-[108px]"
  },
  {
    title: "UI/UX Design Studio",
    label: "UI/UX",
    desc: "Formulating interactive vector designs, visual wireframes, and prototypes based on user feedback.",
    slug: "web-development-design-company-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZCdyBPqhauvCehjeji7mJaw8uXTI3ScFTjBiDE7opnEF5e2DOe_1atseK5DoaPLYJaevVU80Yrqlok4vmm8mdM8zQZzVzACSJx8dksy2uom05QPQcA2MIZW0Xpa2FLeSvEimSj5AlrHx8C30ADtwh4PdyjQAOo7Mim8NNPdu6ne38VpC-yWyW2GxoNlqSlb2NROvzIfKg8CT-UzNqRLwj6E2dDs5fF99P7Zu6e7MFwuHXGFuu8lX0c8zaTgohil3_RASxJGRRUw",
    color: "border-secondary/45 shadow-secondary/25",
    textColor: "text-secondary",
    sizeClass: "w-18 h-18 md:w-[84px] md:h-[84px]"
  },
  {
    title: "Influencer Marketing",
    label: "CREATORS",
    desc: "Coordinating viral campaigns using content creators, vloggers, and social media figures.",
    slug: "digital-marketing-services-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuZaT68NKd4_OEU8_3FDbawWfEGiAQL_1RmzHBSE3_2ys8wuS1up3mrL1EY8dIuOQ3z7UkcJJj7H0AebS6U_XnvxoenV7qlI2MCJeOaITq5QnD81i9zeerw8r6HOm9vgC9y4QrQDiTPi-udZiGOT_Zu34BRIb_L-xqkgnqxUDWJYoVOobwdccLq8QlHartG_15-p_E56kut2ktSohuEQc1qINwHMtjJwDgLXatnIxsLtD8lGEPBH9-5wPfXQ0fXgYz43TeBxrXjXw",
    color: "border-white/30 shadow-white/10",
    textColor: "text-white",
    sizeClass: "w-22 h-22 md:w-[98px] md:h-[98px]"
  },
  {
    title: "Corporate Identity",
    label: "IDENTITY",
    desc: "Redefining visual architectures, logo marks, envelopes, business cards, and correspondence layouts.",
    slug: "branding-company-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvo3wbuUuD8KX8kR1giRtWpxaV6WRQ5V_2Sar7tl72EpRvslE2n-zaFn8m2VfJR59n7_gK9-euHKkvEQU1gnTqjBcWknotPUKFSMkeeyW9fFRwcAU2lnYY-kwoVh8Nt_xqWgk6F92voMLoawF8rFcnCRrOamZk63I6bJS9vA45cVk4BbT2HYjCz7hMk1OmMsVBwFINaBD-xiz0yT4jY9sPDVhIS00w40-Mw5e49PxZaXp56I90X50axX-g-mUwlgeFmJrE8laj9Q",
    color: "border-primary/45 shadow-primary/25",
    textColor: "text-primary",
    sizeClass: "w-20 h-20 md:w-[88px] md:h-[88px]"
  },
  {
    title: "Application Engineering",
    label: "DEV/PORTAL",
    desc: "Engineering highly reactive custom portals, web apps, database setups, and cloud networks.",
    slug: "web-development-design-company-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZCdyBPqhauvCehjeji7mJaw8uXTI3ScFTjBiDE7opnEF5e2DOe_1atseK5DoaPLYJaevVU80Yrqlok4vmm8mdM8zQZzVzACSJx8dksy2uom05QPQcA2MIZW0Xpa2FLeSvEimSj5AlrHx8C30ADtwh4PdyjQAOo7Mim8NNPdu6ne38VpC-yWyW2GxoNlqSlb2NROvzIfKg8CT-UzNqRLwj6E2dDs5fF99P7Zu6e7MFwuHXGFuu8lX0c8zaTgohil3_RASxJGRRUw",
    color: "border-secondary/45 shadow-secondary/25",
    textColor: "text-secondary",
    sizeClass: "w-24 h-24 md:w-[104px] md:h-[104px]"
  },
  {
    title: "Performance Optimization",
    label: "SPEED/SEO",
    desc: "Compressing asset sizes, refactoring scripts, and optimizing layout shift configurations for high scores.",
    slug: "web-development-design-company-india",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuZaT68NKd4_OEU8_3FDbawWfEGiAQL_1RmzHBSE3_2ys8wuS1up3mrL1EY8dIuOQ3z7UkcJJj7H0AebS6U_XnvxoenV7qlI2MCJeOaITq5QnD81i9zeerw8r6HOm9vgC9y4QrQDiTPi-udZiGOT_Zu34BRIb_L-xqkgnqxUDWJYoVOobwdccLq8QlHartG_15-p_E56kut2ktSohuEQc1qINwHMtjJwDgLXatnIxsLtD8lGEPBH9-5wPfXQ0fXgYz43TeBxrXjXw",
    color: "border-[#00dce6]/45 shadow-[#00dce6]/25",
    textColor: "text-[#00dce6]",
    sizeClass: "w-18 h-18 md:w-[80px] md:h-[80px]"
  }
];

export default function HomePageClient() {
  const [hoveredService, setHoveredService] = useState(null);
  const router = useRouter();

  // Initialize Lenis smooth scroll engine inside effect hook
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Framer Motion scroll tracking
  const { scrollY, scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Pass scroll state velocity directly to shader uniforms
  const [velocity, setVelocity] = useState(0);
  useEffect(() => {
    return scrollVelocity.onChange((v) => {
      const normalized = Math.min(Math.abs(v) / 750, 4.5);
      setVelocity(normalized);
    });
  }, [scrollVelocity]);

  // Cylinder 3D Slogan 1: EXPECT THE EXTRA
  const slogan1Y = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const slogan1RotateX = useTransform(scrollYProgress, [0, 0.35], [0, -90]);
  const slogan1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 0.7, 0]);
  const slogan1Z = useTransform(scrollYProgress, [0, 0.35], [0, -250]);

  // Cylinder 3D Slogan 2: CRAFT THE FUTURE
  const slogan2Y = useTransform(scrollYProgress, [0.25, 0.45, 0.6, 0.75], [120, 0, 0, -120]);
  const slogan2RotateX = useTransform(scrollYProgress, [0.25, 0.45, 0.6, 0.75], [90, 0, 0, -90]);
  const slogan2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.65, 0.75], [0, 1, 1, 0]);
  const slogan2Z = useTransform(scrollYProgress, [0.25, 0.45, 0.6, 0.75], [-250, 0, 0, -250]);

  // Cylinder 3D Slogan 3: BEYOND THE HORIZON
  const slogan3Y = useTransform(scrollYProgress, [0.65, 0.85], [120, 0]);
  const slogan3RotateX = useTransform(scrollYProgress, [0.65, 0.85], [90, 0]);
  const slogan3Opacity = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);
  const slogan3Z = useTransform(scrollYProgress, [0.65, 0.85], [-250, 0]);

  // Section status indicator logic based on scroll progress
  const activeSection = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1, 2, 3, 3]);
  const [sectionIndex, setSectionIndex] = useState(1);
  useEffect(() => {
    return activeSection.onChange((v) => {
      setSectionIndex(Math.floor(v));
    });
  }, [activeSection]);

  // --- 15 Staggered Converging Molecular Service Bubbles Coordinates Maps ---
  // Bubble 0: Center
  const b0X = useTransform(scrollYProgress, [0.05, 0.42, 0.72, 0.95], ["-42vw", "0px", "0px", "-65vw"]);
  const b0Y = useTransform(scrollYProgress, [0.05, 0.42, 0.72, 0.95], ["-50vh", "0px", "0px", "-65vh"]);
  
  // Bubble 1
  const b1X = useTransform(scrollYProgress, [0.12, 0.48, 0.68, 0.92], ["42vw", "65px", "65px", "65vw"]);
  const b1Y = useTransform(scrollYProgress, [0.12, 0.48, 0.68, 0.92], ["-48vh", "-35px", "-35px", "-65vh"]);

  // Bubble 2
  const b2X = useTransform(scrollYProgress, [0.08, 0.44, 0.74, 0.98], ["-40vw", "-65px", "-65px", "-65vw"]);
  const b2Y = useTransform(scrollYProgress, [0.08, 0.44, 0.74, 0.98], ["45vh", "35px", "35px", "65vh"]);

  // Bubble 3
  const b3X = useTransform(scrollYProgress, [0.15, 0.50, 0.70, 0.90], ["40vw", "65px", "65px", "65vw"]);
  const b3Y = useTransform(scrollYProgress, [0.15, 0.50, 0.70, 0.90], ["43vh", "35px", "35px", "65vh"]);

  // Bubble 4
  const b4X = useTransform(scrollYProgress, [0.02, 0.40, 0.75, 0.95], ["-48vw", "-65px", "-65px", "-75vw"]);
  const b4Y = useTransform(scrollYProgress, [0.02, 0.40, 0.75, 0.95], ["-10vh", "-35px", "-35px", "-15vh"]);

  // Bubble 5
  const b5X = useTransform(scrollYProgress, [0.18, 0.52, 0.66, 0.88], ["48vw", "0px", "0px", "75vw"]);
  const b5Y = useTransform(scrollYProgress, [0.18, 0.52, 0.66, 0.88], ["-15vh", "75px", "75px", "15vh"]);

  // Bubble 6
  const b6X = useTransform(scrollYProgress, [0.06, 0.45, 0.73, 0.96], ["-48vw", "0px", "0px", "-75vw"]);
  const b6Y = useTransform(scrollYProgress, [0.06, 0.45, 0.73, 0.96], ["15vh", "-75px", "-75px", "-15vh"]);

  // Bubble 7
  const b7X = useTransform(scrollYProgress, [0.14, 0.49, 0.69, 0.91], ["48vw", "130px", "130px", "75vw"]);
  const b7Y = useTransform(scrollYProgress, [0.14, 0.49, 0.69, 0.91], ["18vh", "0px", "0px", "25vh"]);

  // Bubble 8
  const b8X = useTransform(scrollYProgress, [0.10, 0.43, 0.71, 0.94], ["-15vw", "-130px", "-130px", "-25vw"]);
  const b8Y = useTransform(scrollYProgress, [0.10, 0.43, 0.71, 0.94], ["-55vh", "0px", "0px", "-75vh"]);

  // Bubble 9
  const b9X = useTransform(scrollYProgress, [0.04, 0.41, 0.76, 0.97], ["15vw", "110px", "110px", "25vw"]);
  const b9Y = useTransform(scrollYProgress, [0.04, 0.41, 0.76, 0.97], ["-52vh", "-70px", "-70px", "-75vh"]);

  // Bubble 10
  const b10X = useTransform(scrollYProgress, [0.16, 0.51, 0.67, 0.89], ["-20vw", "-110px", "-110px", "-25vw"]);
  const b10Y = useTransform(scrollYProgress, [0.16, 0.51, 0.67, 0.89], ["55vh", "70px", "70px", "75vh"]);

  // Bubble 11
  const b11X = useTransform(scrollYProgress, [0.08, 0.46, 0.74, 0.96], ["20vw", "110px", "110px", "25vw"]);
  const b11Y = useTransform(scrollYProgress, [0.08, 0.46, 0.74, 0.96], ["52vh", "70px", "70px", "75vh"]);

  // Bubble 12
  const b12X = useTransform(scrollYProgress, [0.11, 0.47, 0.70, 0.93], ["-30vw", "-110px", "-110px", "-45vw"]);
  const b12Y = useTransform(scrollYProgress, [0.11, 0.47, 0.70, 0.93], ["-55vh", "-70px", "-70px", "-75vh"]);

  // Bubble 13
  const b13X = useTransform(scrollYProgress, [0.05, 0.42, 0.75, 0.98], ["30vw", "-50px", "-50px", "45vw"]);
  const b13Y = useTransform(scrollYProgress, [0.05, 0.42, 0.75, 0.98], ["-52vh", "-135px", "-135px", "-75vh"]);

  // Bubble 14
  const b14X = useTransform(scrollYProgress, [0.13, 0.48, 0.68, 0.91], ["0vw", "50px", "50px", "0vw"]);
  const b14Y = useTransform(scrollYProgress, [0.13, 0.48, 0.68, 0.91], ["-55vh", "135px", "135px", "75vh"]);

  // Consolidate transformations in an indexable array
  const bubbleTransforms = [
    { x: b0X, y: b0Y },
    { x: b1X, y: b1Y },
    { x: b2X, y: b2Y },
    { x: b3X, y: b3Y },
    { x: b4X, y: b4Y },
    { x: b5X, y: b5Y },
    { x: b6X, y: b6Y },
    { x: b7X, y: b7Y },
    { x: b8X, y: b8Y },
    { x: b9X, y: b9Y },
    { x: b10X, y: b10Y },
    { x: b11X, y: b11Y },
    { x: b12X, y: b12Y },
    { x: b13X, y: b13Y },
    { x: b14X, y: b14Y }
  ];

  // Global opacity curve for the bubbles layer
  const bubblesOpacity = useTransform(scrollYProgress, [0.0, 0.08, 0.72, 0.88], [0, 1, 1, 0]);

  return (
    <>
      {/* HUD SCI-FI OVERLAY INTERFACE */}
      <div className="fixed inset-0 pointer-events-none z-30 font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-[#00dce6]/50 select-none">
        
        {/* Top HUD Bar */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center pointer-events-auto">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
            <span className="text-white font-semibold">STATUS: KINETIC_SYS_ONLINE</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center text-on-surface-variant/60 text-[9px]">
            <span>STAGES: [ 01 / 02 / 03 ]</span>
            <span>TARGET_GEO: TORUS_KNOT</span>
          </div>
          
          <Link href="/" className="text-white hover:text-primary transition-colors text-[10px] font-sans font-bold tracking-widest shrink-0">
            ← BACK TO MAIN
          </Link>
        </div>

        {/* Bottom HUD Navigation and Actions */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center pointer-events-auto">
          <div className="text-on-surface-variant/50 text-[9px] hidden sm:block">
            <span>SYS_COORD: [MM_3D_LABS_2026]</span>
          </div>

          {/* Dynamic Stage Indicator */}
          <div className="flex gap-4 items-center">
            <span className="text-white tracking-widest text-[10px]">STAGE_0{sectionIndex}</span>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-4 h-1 transition-colors duration-300 ${
                    sectionIndex === i ? "bg-[#00dce6]" : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="px-6 py-2.5 border border-primary/30 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white active:scale-95 transition-all text-[10px] font-sans font-bold uppercase tracking-widest cursor-pointer shrink-0"
          >
            Connect Now
          </Link>
        </div>

      </div>

      {/* CORE EXPERIENCE VIEWPORT */}
      <div className="bg-[#0b0d1b] text-white selection:bg-primary-container selection:text-white min-h-screen">

        {/* Fixed 3D Scene Backdrop */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <ThreeDOrb scrollProgress={scrollYProgress} velocity={velocity} />
        </div>

        {/* 3D Cylinder Scrolling Slogan Text Container */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10 select-none overflow-hidden">
          <div className="relative w-full max-w-7xl px-8 flex items-center justify-center" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
            
            {/* Slogan 1 */}
            <motion.h2
              style={{
                y: slogan1Y,
                rotateX: slogan1RotateX,
                z: slogan1Z,
                opacity: slogan1Opacity,
                transformStyle: "preserve-3d"
              }}
              className="absolute font-headline-xl text-4xl md:text-[6.5rem] font-black uppercase text-center leading-[1.05] tracking-tight text-white/5 border-text"
            >
              Expect the <span className="text-gradient-aurora italic">Extra</span>
            </motion.h2>

            {/* Slogan 2 */}
            <motion.h2
              style={{
                y: slogan2Y,
                rotateX: slogan2RotateX,
                z: slogan2Z,
                opacity: slogan2Opacity,
                transformStyle: "preserve-3d"
              }}
              className="absolute font-headline-xl text-4xl md:text-[6.5rem] font-black uppercase text-center leading-[1.05] tracking-tight text-white/5 border-text"
            >
              Craft the <span className="text-gradient-aurora italic">Future</span>
            </motion.h2>

            {/* Slogan 3 */}
            <motion.h2
              style={{
                y: slogan3Y,
                rotateX: slogan3RotateX,
                z: slogan3Z,
                opacity: slogan3Opacity,
                transformStyle: "preserve-3d"
              }}
              className="absolute font-headline-xl text-4xl md:text-[6.5rem] font-black uppercase text-center leading-[1.05] tracking-tight text-white/5 border-text"
            >
              Beyond the <span className="text-gradient-aurora italic">Horizon</span>
            </motion.h2>

          </div>
        </div>

        {/* CSS styles for bordered text */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .border-text {
              -webkit-text-stroke: 1.2px rgba(255, 255, 255, 0.05);
              text-shadow: 0 0 50px rgba(157, 80, 187, 0.03);
            }
          `
        }} />

        {/* CONVERGING SERVICE BUBBLES INTERACTIVE LAYER */}
        <motion.div
          style={{ opacity: bubblesOpacity }}
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-20 overflow-visible select-none"
        >
          <div className="relative w-full max-w-7xl h-full flex items-center justify-center overflow-visible">
            
            {SERVICES.map((srv, index) => (
              <motion.div
                key={index}
                style={{ x: bubbleTransforms[index].x, y: bubbleTransforms[index].y }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => router.push(`/services/${srv.slug}`)}
                className={`absolute rounded-full border bg-black/25 backdrop-blur-xs overflow-visible pointer-events-auto cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group ${srv.color} ${srv.sizeClass}`}
                style={{
                  x: bubbleTransforms[index].x,
                  y: bubbleTransforms[index].y,
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.45)"
                }}
              >
                {/* Staggered Liquid Bubble Float Animation Layer */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    x: [0, 6, 0],
                    rotate: [0, 4, -4, 0]
                  }}
                  transition={{
                    duration: 5.0 + index * 0.65,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15
                  }}
                  className="w-full h-full relative rounded-full overflow-hidden"
                  style={{
                    boxShadow: "inset 0 10px 15px rgba(255,255,255,0.35), inset 0 -10px 15px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.1)",
                    background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 80%)"
                  }}
                >
                  {/* Circular-masked Image inside */}
                  <div className="absolute inset-[3px] rounded-full overflow-hidden relative pointer-events-none">
                    <img src={srv.img} className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-500 opacity-65 group-hover:opacity-100 scale-105" />
                  </div>
                  
                  {/* Specular Highlight cap at the top of the bubble */}
                  <div className="absolute top-1 left-2 right-2 h-[30%] rounded-full bg-gradient-to-b from-white/35 to-white/0 pointer-events-none filter blur-[1px]" />
                  
                  {/* Glossy glare highlight reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 pointer-events-none" />
                  
                  {/* Label Text */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-transparent transition-colors">
                    <span className={`font-mono text-[7px] md:text-[8px] font-bold tracking-widest ${srv.textColor} drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]`}>
                      {srv.label}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* CENTRAL FLOAT INFORMATION PANEL ON BUBBLE HOVER */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-25">
          <AnimatePresence>
            {hoveredService !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 180, damping: 15 }}
                className="bg-surface-container/30 backdrop-blur-2xl border border-white/10 p-6 rounded-[28px] max-w-sm pointer-events-auto shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] text-center absolute bottom-[18vh] select-none"
              >
                <span className="text-[8px] font-mono text-primary tracking-[0.3em] uppercase block mb-2">
                  MM // SERVICE_SPEC_ACTIVE
                </span>
                <h3 className="font-headline-md text-[15px] text-white mb-2 uppercase font-black tracking-widest">
                  {SERVICES[hoveredService].title}
                </h3>
                <p className="font-mono text-[9.5px] text-on-surface-variant leading-relaxed mb-4 opacity-80">
                  {SERVICES[hoveredService].desc}
                </p>
                <span className="text-[9px] font-mono font-bold text-[#00dce6] hover:underline uppercase tracking-widest">
                  Click bubble to open slug →
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Natural Document Flow Scroll Content Wrapper */}
        <div className="relative w-full z-20">

          {/* Section 1: Intro Frame */}
          <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center pt-24 z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-2xl mx-auto"
            >
              <h1 className="text-xs font-mono font-bold tracking-[0.4em] text-primary uppercase mb-6 animate-pulse">
                01 // KINETIC LAB INITIALIZATION
              </h1>
              <p className="font-sans text-sm md:text-md text-on-surface-variant leading-relaxed max-w-lg mx-auto opacity-70">
                Move your cursor to warp space coordinates. Scroll down slowly to witness the floating service bubbles converge.
              </p>
            </motion.div>
          </section>

          {/* Section 2: Technical Transduction Card */}
          <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center z-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-md bg-surface-container/20 backdrop-blur-xl border border-white/5 p-8 rounded-[24px] shadow-2xl relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full border border-[#00dce6]/30 bg-[#00dce6]/10 text-[#00dce6] text-[8px] font-mono tracking-widest uppercase">
                SPECIFICATIONS
              </div>

              <div className="space-y-4 text-left font-mono text-[10px] tracking-wider text-on-surface-variant">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>GLSL_RENDER_ENGINE</span>
                  <span className="text-white">Active</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>REFRACTIVE_CORE_MESH</span>
                  <span className="text-white">TorusKnotGeometry</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>DEFORMATION_TYPE</span>
                  <span className="text-white">Simplex displacement</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>SHADING_FRESNEL</span>
                  <span className="text-white">Phong specular mix</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Section 3: Final Call to Action */}
          <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-xl bg-surface-container/20 backdrop-blur-xl border border-white/5 p-12 rounded-[40px] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
              
              <span className="material-symbols-outlined text-primary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                bolt
              </span>
              
              <h2 className="font-headline-lg text-headline-lg text-white mb-6">
                Expect the Extraordinary
              </h2>
              
              <p className="font-body-md text-on-surface-variant mb-10 max-w-sm mx-auto leading-relaxed opacity-70">
                Ready to craft immersive WebGL kinetic modules for your next product launch?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="btn-gradient text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform text-xs uppercase tracking-widest cursor-pointer"
                >
                  Contact Us
                </Link>
                <Link
                  href="/"
                  className="glass-panel px-8 py-3.5 rounded-full font-bold hover:bg-white/5 active:scale-95 transition-all text-xs text-white uppercase tracking-widest cursor-pointer"
                >
                  Back to Main
                </Link>
              </div>
            </motion.div>
          </section>

          {/* Scroll end spacer */}
          <div className="h-[20vh]" />

        </div>

      </div>
    </>
  );
}
