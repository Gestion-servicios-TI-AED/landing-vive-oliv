import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import clsx from "clsx";
import logo from "@/assets/e70c42e76d8f373f7319be198453a0d6dc47133e.webp";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans",
        scrolled ? "bg-[#2e3f22]/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-center md:justify-between items-center">
        <div className="z-50 cursor-pointer">
          <Link to="hero" smooth={true} duration={800}>
            <img src={logo} alt="OLIV Cartagena" className="h-10 md:h-12 w-auto" />
          </Link>
        </div>

        {/* Action Button - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex items-center">
          <Link
            to="lead-form"
            smooth={true}
            duration={800}
            className="px-6 py-2 bg-[#2e3f22] text-white text-sm tracking-wide hover:bg-[#2e3f22] transition-colors rounded-full cursor-pointer shadow-sm hover:shadow-md"
          >
            Ser Fundador
          </Link>
        </div>
      </div>
    </nav>
  );
};
