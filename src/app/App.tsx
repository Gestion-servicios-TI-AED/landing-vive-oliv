import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Concept } from "./components/Concept";
import { ParallaxBanner } from "./components/ParallaxBanner";
import { WhyOliv } from "./components/WhyOliv";
import { Location } from "./components/Location";
import { Gallery } from "./components/Gallery";
import { Investment } from "./components/Investment";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";
import "../styles/fonts.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("submissionGuid")) {
      navigate("/gracias", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="bg-[#fcfcfb] min-h-screen font-sans selection:bg-[#2e3f22] selection:text-white">
      <Navbar />
      <Hero />
      <Concept />
      <ParallaxBanner />
      <WhyOliv />
      <Location />
      <Gallery />
      <Investment />
      <LeadForm />
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
