import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MenuSection from "@/components/MenuSection";
import StatsSection from "@/components/StatsSection";
import ChefsSection from "@/components/ChefsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MenuSection />
      <StatsSection />
      <ChefsSection />
      <TestimonialsSection />
      <BookingSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
