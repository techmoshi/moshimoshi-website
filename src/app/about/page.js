import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutDNASection from "@/components/about/AboutDNASection";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutExperienceSection from "@/components/about/AboutExperienceSection";
import AboutPurpleSheepsSection from "@/components/about/AboutPurpleSheepsSection";
import AboutCTASection from "@/components/about/AboutCTASection";

export const metadata = {
  title: "About Us | Moshi Moshi - Expect the Extra",
  description:
    "Not just an ad agency or a creative agency, we are a Communication Company. We release ourselves from preset definitions to unlock a world of creative possibilities.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative z-10 bg-surface-dim text-on-surface overflow-hidden">
        <AboutHeroSection />
        <AboutDNASection />
        <AboutStorySection />
        <AboutExperienceSection />
        <AboutPurpleSheepsSection />
        <AboutCTASection />
      </main>

      <Footer />
    </>
  );
}
