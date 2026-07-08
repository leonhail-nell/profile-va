import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ToolsSection from "./components/ToolsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
