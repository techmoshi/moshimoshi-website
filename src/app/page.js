"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import OurDNASection from "@/components/OurDNASection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  // Shared state: AI Discovery Assistant highlights sections in Services & Portfolio
  const [highlightedSections, setHighlightedSections] = useState([]);

  const handleHighlightSections = useCallback((sections) => {
    setHighlightedSections(sections);
  }, []);

  return (
    <>
      <Navbar />

      <main className="w-full">
        <HeroSection onHighlightSections={handleHighlightSections} />
        <TrustedBySection />
        <OurDNASection />
        <ServicesSection highlightedSections={highlightedSections} />
        <PortfolioSection highlightedSections={highlightedSections} />
        <TestimonialsSection />
        <InsightsSection />
        <FeaturedInSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
