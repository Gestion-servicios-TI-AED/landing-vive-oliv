import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Concept } from "./components/Concept";
import { ParallaxBanner } from "./components/ParallaxBanner";
import { WhyOliv } from "./components/WhyOliv";
import { Gallery } from "./components/Gallery";
import { Investment } from "./components/Investment";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Toaster } from "sonner";
import "../styles/fonts.css";

function App() {
  return (
    <div className="bg-[#fcfcfb] min-h-screen font-sans selection:bg-[#1a7d7a] selection:text-white">
      <Navbar />
      <Hero />
      <Concept />
      <ParallaxBanner />
      <WhyOliv />
      <Gallery />
      <Investment />
      <LeadForm />
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
