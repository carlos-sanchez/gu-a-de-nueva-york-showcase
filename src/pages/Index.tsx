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
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutBookSection />
      <SampleReaderSection />
      <TestimonialsSection />
      <AuthorsSection />
      <BookDetailsSection />
      <BuySection />
      <SponsorsSection />
      <Footer />
    </main>
  );
};

export default Index;
