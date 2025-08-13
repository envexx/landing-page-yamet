import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Pastikan lucide-react terinstall

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className="fixed top-0 left-0 right-0 w-full z-50 px-4 pt-4">
      <header
        className={`w-full max-w-7xl mx-auto rounded-xl transition-all duration-300 ${isScrolled
            ? "bg-white/30 backdrop-blur-[10px] shadow-sm border-[1px] border-white"
            : "bg-white/80 backdrop-blur-md shadow-sm border-1"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <picture>
              <source srcSet="/logo/yamet.webp" type="image/webp" />
              <img src="/logo/yamet.png" alt="Logo" className="h-10" />
            </picture>
          </div>

          {/* Hamburger Button - Mobile with Animation */}
          <div className="md:hidden">
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
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
            <button onClick={() => scrollToSection('home')} className="font-sf text-black font-semibold hover:text-yellow-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('layanan')} className="font-sf hover:text-yellow-500 transition-colors">Layanan</button>
            <button onClick={() => scrollToSection('faq')} className="font-sf hover:text-yellow-500 transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('galeri')} className="font-sf hover:text-yellow-500 transition-colors">Blog</button>
            <button onClick={() => scrollToSection('about')} className="font-sf hover:text-yellow-500 transition-colors">About Us</button>
          </nav>

          {/* Konsultasi Button - Desktop */}
          <div className="hidden md:block">
            <a href="/konsultasi">
              <button className="bg-yellow-400 font-sf text-md font-medium hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
                Konsultasi Sekarang
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Menu with Smooth Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen
              ? "max-h-78 opacity-100"
              : "max-h-0 opacity-0"
            }`}
        >
          <div className="p-4 space-y-2 text-sm text-gray-700 border-t border-gray-100 bg-white/90 backdrop-blur-md rounded-b-xl">
            <button onClick={() => scrollToSection('home')} className="font-sf block w-full text-left px-4 py-2 font-bold hover:bg-gray-50 rounded-lg transition-all duration-200">Home</button>
            <button onClick={() => scrollToSection('layanan')} className="font-sf block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-all duration-200">Layanan</button>
            <button onClick={() => scrollToSection('faq')} className="font-sf block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-all duration-200">FAQ</button>
            <button onClick={() => scrollToSection('galeri')} className="font-sf block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-all duration-200">Blog</button>
            <button onClick={() => scrollToSection('about')} className="font-sf block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-all duration-200">About Us</button>
            <a href="/konsultasi">
              <button className="block w-full bg-yellow-400 hover:bg-yellow-500 text-white font-sf font-semibold py-2 px-4 rounded-lg mt-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
                Konsultasi Sekarang
              </button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;