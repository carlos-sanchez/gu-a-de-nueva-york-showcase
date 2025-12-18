import HeroSection from "@/components/HeroSection";
import AboutBookSection from "@/components/AboutBookSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AuthorsSection from "@/components/AuthorsSection";
import BookDetailsSection from "@/components/BookDetailsSection";
import BuySection from "@/components/BuySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutBookSection />
      <TestimonialsSection />
      <AuthorsSection />
      <BookDetailsSection />
      <BuySection />
      <Footer />
    </main>
  );
};

export default Index;
