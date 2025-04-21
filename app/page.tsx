import { HeroHeader } from "@/components/hero5-header";

import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MenuHighlightsSection from "@/components/menu-section";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      <AboutSection />
      <MenuHighlightsSection/>
    </>
  );
}
