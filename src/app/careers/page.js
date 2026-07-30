"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHeroSection from "@/components/careers/CareersHeroSection";
import CareersCultureSection from "@/components/careers/CareersCultureSection";
import CareersPositionsSection from "@/components/careers/CareersPositionsSection";
import CareersApplicationSection from "@/components/careers/CareersApplicationSection";

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleSelectPosition = (positionTitle) => {
    setSelectedPosition(positionTitle);
  };

  return (
    <>
      {/* Background Aurora Blurs */}
      <div className="aurora-blur aurora-1" />
      <div className="aurora-blur aurora-2" />

      <Navbar />

      <main className="pt-32 relative z-10 bg-surface text-on-surface">
        <CareersHeroSection />
        <CareersCultureSection />
        <CareersPositionsSection onSelectPosition={handleSelectPosition} />
        <CareersApplicationSection selectedPosition={selectedPosition} />
      </main>

      <Footer />
    </>
  );
}
