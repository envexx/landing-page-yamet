import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Pastikan lucide-react terinstall
import { Link, useLocation } from "react-router-dom";
import { WHATSAPP_LINK } from "../constants/links";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Effect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Tambahkan event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk smooth scroll ke section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Tutup mobile menu jika terbuka
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 pt-3 pb-2">
      <header
        className={`mx-auto w-full max-w-screen-xl rounded-xl transition-all duration-300 ${isScrolled
            ? "bg-white/60 backdrop-blur-[10px] shadow-sm border border-white/70"
            : "bg-white/90 backdrop-blur-md shadow-sm"
          }`}
      >
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <picture>
              <source srcSet="/logo/yamet.webp" type="image/webp" />
              <img src="/logo/yamet.png" alt="Logo" className="h-10" />
            </picture>
          </div>

          {/* Hamburger Button - Mobile with Animation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center focus:outline-none group"
              aria-label="Toggle menu"
            >
              <div className="relative flex overflow-hidden items-center justify-center w-full h-full transform transition-all duration-300">
                {/* Hamburger Icon with Animation */}
                <div className={`flex flex-col justify-between w-6 h-5 transform transition-all duration-300 origin-center overflow-hidden ${isOpen ? "translate-x-10" : ""}`}>
                  <div className="bg-gray-700 h-0.5 w-6 transform transition-all duration-300 origin-left"></div>
                  <div className="bg-gray-700 h-0.5 w-6 rounded"></div>
                  <div className="bg-gray-700 h-0.5 w-6 transform transition-all duration-300 origin-left"></div>
                </div>

                {/* Close Icon with Animation */}
                <div className={`absolute flex flex-col justify-between w-6 h-5 transform transition-all duration-300 origin-center overflow-hidden ${isOpen ? "" : "-translate-x-10"}`}>
                  <div className="bg-gray-700 h-0.5 w-6 transform transition-all duration-300 origin-left rotate-45 translate-y-2"></div>
                  <div className="bg-gray-700 h-0.5 w-6 rounded opacity-0"></div>
                  <div className="bg-gray-700 h-0.5 w-6 transform transition-all duration-300 origin-left -rotate-45 -translate-y-2"></div>
                </div>
              </div>
            </button>
          </div>

          {/* Nav Items - Desktop */}
          <nav className="hidden md:flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm lg:text-base font-medium text-gray-600">
            <Link to="/" className={`font-sf transition-colors ${location.pathname === '/' ? 'text-amber-500 font-bold' : 'hover:text-yellow-500'}`}>Home</Link>
            <Link to="/layanan" className={`font-sf transition-colors ${location.pathname === '/layanan' ? 'text-amber-500 font-bold' : 'hover:text-yellow-500'}`}>Layanan</Link>
            <Link to="/galeri" className={`font-sf transition-colors ${location.pathname === '/galeri' ? 'text-amber-500 font-bold' : 'hover:text-yellow-500'}`}>Galeri</Link>
            <Link to="/blog" className={`font-sf transition-colors ${location.pathname === '/blog' ? 'text-amber-500 font-bold' : 'hover:text-yellow-500'}`}>Blog</Link>
            <Link to="/#about" className={`font-sf transition-colors`}>About Us</Link>
          </nav>

          {/* Konsultasi Button - Desktop */}
          <div className="hidden md:block flex-shrink-0">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
                  e.preventDefault();
                  window.gtag_report_conversion(WHATSAPP_LINK);
                }
              }}
            >
              <button className="bg-yellow-400 font-sf text-md font-medium hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
                Konsultasi Sekarang
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Menu with Smooth Animation */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] transition-opacity duration-300 ease-in-out ${isOpen
              ? "max-h-[480px] opacity-100"
              : "max-h-0 opacity-0"
            }`}
        >
          <div className="p-4 space-y-2 text-sm text-gray-700 border-t border-gray-100 bg-white/95 backdrop-blur-md rounded-b-xl">
            <Link to="/" className={`font-sf block w-full text-left px-4 py-2 font-bold rounded-lg transition-all duration-200 ${location.pathname === '/' ? 'text-amber-500' : 'hover:bg-gray-50'}`}>Home</Link>
            <Link to="/layanan" className={`font-sf block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${location.pathname === '/layanan' ? 'text-amber-500 font-bold bg-amber-50' : 'hover:bg-gray-50'}`}>Layanan</Link>
            <Link to="/galeri" className={`font-sf block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${location.pathname === '/galeri' ? 'text-amber-500 font-bold bg-amber-50' : 'hover:bg-gray-50'}`}>Galeri</Link>
            <Link to="/blog" className={`font-sf block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${location.pathname === '/blog' ? 'text-amber-500 font-bold bg-amber-50' : 'hover:bg-gray-50'}`}>Blog</Link>
            <Link to="/#about" className="font-sf block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50">About Us</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
                  e.preventDefault();
                  window.gtag_report_conversion(WHATSAPP_LINK);
                }
              }}
              className="block w-full bg-yellow-400 hover:bg-yellow-500 text-white font-sf font-semibold py-2 px-4 rounded-lg mt-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md text-center"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;