import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  // ✅ AUTO CLOSE MENU ON RESIZE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full h-20 z-50
      bg-gradient-to-r from-[#05060a]/90 via-[#070b1a]/90 to-[#05060a]/90
      backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto h-full px-6
        flex items-center justify-between">

        {/* Logo */}
        <a href="/">
            <img src="/logo.svg" width={50} height={50} alt="Md Tufail" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Navbar />
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-5 py-2 rounded-full
            border border-indigo-500/40 text-indigo-400
            hover:bg-indigo-500/10 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setNavOpen(prev => !prev)}
        >
          <span className="material-symbols-rounded">
            {navOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="absolute top-20 right-6">
            <Navbar mobile onClick={() => setNavOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}
