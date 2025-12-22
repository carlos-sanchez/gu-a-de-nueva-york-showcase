import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutBookSection from "@/components/AboutBookSection";
import SampleReaderSection from "@/components/SampleReaderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AuthorsSection from "@/components/AuthorsSection";
import BookDetailsSection from "@/components/BookDetailsSection";
import BuySection from "@/components/BuySection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title for SPA navigation
    document.title = "Guía de Nueva York - Experiencias para vivir la ciudad como un neoyorquino";
  }, []);

  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <article>
          <AboutBookSection />
        </article>
        <SampleReaderSection />
        <aside aria-label="Opiniones de lectores">
          <TestimonialsSection />
        </aside>
        <AuthorsSection />
        <BookDetailsSection />
        <BuySection />
        <SponsorsSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
