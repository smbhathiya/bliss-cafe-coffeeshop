import { HeroHeader } from "@/components/hero5-header";

import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MenuHighlightsSection from "@/components/menu-section";
import VisitUsSection from "@/components/visit-us-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      <AboutSection />
      <MenuHighlightsSection />
      <VisitUsSection />
      <TestimonialsSection />
      <Footer/>
    </>
  );
}
