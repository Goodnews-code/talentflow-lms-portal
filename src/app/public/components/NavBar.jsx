import { Menu, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../lib/utils";

const NavBar = () => {
  const navItems = useMemo(() => [
    { name: "Home", section: "home" },
    { name: "How It Works", section: "how-it-works" },
    { name: "About", section: "about" },
    { name: "Contact", section: "contact" },
  ], []);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHome);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    setIsScrolled(!isHome);
    if (!isHome) {
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.section);
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, navItems]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after scrolling
    }
  };

  const scrollToWelcome = (e) => {
    e.preventDefault();
    scrollToSection("home");
  };

  return (
    <header className={cn( 
      "fixed top-0 left-0 w-full z-40 flex items-center justify-between px-8 transition-all duration-300 border-b border-gray-300", 
      isScrolled? "py-3 bg-[#EAEAEA] shadow-md" : "py-4 bg-[#EAEAEA] shadow-sm" 
    )}>
      
      {/* 1. Left Section: Logo */}
      <div className="flex-1 flex justify-start">
        <a href="#home" onClick={scrollToWelcome} className="z-50 shrink-0">
          <img src="/logo.png" alt="TalentFlow Logo" className="w-28 md:w-30" />
        </a>
      </div>

      {/* 2. Middle Section: Navigation Links */}
      <nav className="hidden md:flex items-center justify-center gap-12 text-neutral-800 font-medium">
        {navItems.map((item) => (
          <button 
            key={item.name} 
            onClick={() => scrollToSection(item.section)}
            className={cn(
              "transition-colors duration-200 hover:text-[#FF7A18] cursor-pointer",
              activeSection === item.section && "text-[#FF7A18]"
            )}
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* 3. Right Section: Buttons */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 border-2 border-[#0a1445] text-[#0a1445] font-bold rounded-lg hover:bg-[#0a1445] hover:text-white transition-all shadow-md whitespace-nowrap cursor-pointer">
            Log In
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-[#ff7a00] text-white font-bold rounded-lg hover:bg-[#e66e00] transition-all shadow-md whitespace-nowrap cursor-pointer">
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen((prev) => !prev)} 
          className="md:hidden p-2 text-neutral-900 z-50 cursor-pointer"
        > 
          {isOpen ? <X size={28} /> : <Menu size={28} />} 
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn( 
        "fixed inset-0 bg-white z-40 flex flex-col pt-28 px-10 transition-transform duration-300 md:hidden", 
        isOpen ? "translate-x-0" : "-translate-x-full" 
      )}>
        <div className="flex flex-col space-y-8 text-xl font-medium">
          {navItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.section)}
              className={cn(
                "text-left transition-colors duration-200",
                activeSection === item.section ? "text-[#FF7A18]" : "text-neutral-900"
              )}
            >
              {item.name}
            </button>
          ))}
          <div className="flex flex-col gap-4">
            <Link to="/login" className="w-full py-3 border-2 border-[#0a1445] text-[#0a1445] font-bold rounded-lg text-center">Log In</Link>
            <Link to="/signup" className="w-full py-3 bg-[#ff7a00] text-white font-bold rounded-lg text-center">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;