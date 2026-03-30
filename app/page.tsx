import About from "@/components/landing/About";
import Blogs from "@/components/landing/Blogs";
import CommunityPartners from "@/components/landing/CommunityPartners";
import Courses from "@/components/landing/Courses";
import Ecosystems from "@/components/landing/Ecosystems";
import Events from "@/components/landing/Events";
import Footer from "@/components/landing/Footer";
import GalleryShowcase from "@/components/landing/GalleryShowcase";
import HeroSection from "@/components/landing/HeroSection";
import MarketingSection from "@/components/landing/MarketingSection";
import Navbar from "@/components/landing/Navbar";
import Team from "@/components/landing/Team";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <Ecosystems />
      <CommunityPartners />
      <Courses />
      <Events />
      <Team />
      <GalleryShowcase />
      <Blogs />
      <Testimonials />
      <MarketingSection />
      <Footer />
    </main>
  );
}
