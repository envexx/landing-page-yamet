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

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 px-4 pt-4">
      <header 
        className={`w-full max-w-7xl mx-auto rounded-xl transition-all duration-300 ${
          isScrolled 
            ? "bg-white/30 backdrop-blur-[10px] shadow-sm border-[1px] border-white" 
            : "bg-white/80 backdrop-blur-md shadow-sm border-1"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo/yamet.png" alt="Logo" className="h-10" />
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
            <a href="#" className="font-sf text-black font-semibold hover:text-yellow-500 transition-colors">Home</a>
            <a href="#" className="font-sf hover:text-yellow-500 transition-colors">Layanan</a>
            <a href="#" className="font-sf hover:text-yellow-500 transition-colors">FAQ</a>
            <a href="#" className="font-sf hover:text-yellow-500 transition-colors">Blog</a>
            <a href="#" className="font-sf hover:text-yellow-500 transition-colors">About Us</a>
          </nav>

          {/* Konsultasi Button - Desktop */}
          <div className="hidden md:block">
            <a href="https://api.whatsapp.com/send?phone=6282385089800&text=Assalamualaikum%21%20%3A%29%20%0D%0AHalo%20Yamet%20Batu%20Aji..%20Saya%20mau%20daftar%20Observasi%20dan%20Assessment%20tumbuh%20kembang%20anak..%20%0D%0A_%2AMohon%20isi%20form%20singkat%20berikut%2A_%20%0D%0A1.%20Nama%20Lengkap%20Anak%20%3A%20%0D%0A2.%20Nama%20Panggilan%20%3A%20%0D%0A3.%20TTL%20%3A%20%0D%0A4.%20Usia%20%3A%20%0D%0A5.%20Keluhan%20%28tuliskan%20minimal%203%29%20%3A%20%0D%0A%20%20%20%20a.%20%0D%0A%20%20%20%20b.%20%0D%0A%20%20%20%20c.%20%0D%0A6.%20Nama%20Ayah%20%3A%20%0D%0A7.%20Nama%20Bunda%20%3A%20%0D%0A8.%20Usaha%20apa%20yang%20sudah%20dilakukan%20selama%20ini%20%3A%20%0D%0A9.%20Kendala%20dalam%20melakukan%20usaha%20tersebut%20%3A%20%0D%0AMengetahui%20Yamet%20Child%20Development%20Center%20dari%3F%20%3A">
            <button className="bg-yellow-400 font-sf text-md font-medium hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
              Konsultasi Sekarang
            </button>
            </a>
          </div>
        </div>

        {/* Mobile Menu with Smooth Animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? "max-h-78 opacity-100" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 space-y-2 text-sm text-gray-700 border-t border-gray-100 bg-white/90 backdrop-blur-md rounded-b-xl">
            <a href="#" className="font-sf block px-4 py-2 font-bold hover:bg-gray-50 rounded-lg transition-all duration-200">Home</a>
            <a href="#" className="font-sf block px-4 py-2 hover:bg-gray-50 rounded-lg transition-all duration-200">Layanan</a>
            <a href="#" className="font-sf block px-4 py-2 hover:bg-gray-50 rounded-lg transition-all duration-200">FAQ</a>
            <a href="#" className="font-sf block px-4 py-2 hover:bg-gray-50 rounded-lg transition-all duration-200">Blog</a>
            <a href="#" className="font-sf block px-4 py-2 hover:bg-gray-50 rounded-lg transition-all duration-200">About Us</a>
            <button className="block w-full bg-yellow-400 hover:bg-yellow-500 text-white font-sf font-semibold py-2 px-4 rounded-lg mt-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;