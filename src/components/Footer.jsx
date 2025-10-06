import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK, INSTAGRAM_LINK, TIKTOK_LINK } from '../constants/links';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow-50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and brief description */}
          <div className="col-span-1">
            <div className="mb-4">
              <picture>
                <source srcSet="/logo/yamet.webp" type="image/webp" />
                <img src="/logo/yamet.png" alt="Klinik Yamet Logo" className="h-12" />
              </picture>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Layanan Terapi dan Konsultasi Tumbuh Kembang Anak oleh Tim Profesional Berpengalaman di Batam Tiban.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={TIKTOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation - Services */}
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li>
                <a href="/layanan/terapi-wicara" className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300">
                  Terapi Wicara
                </a>
              </li>
              <li>
                <a href="/layanan/terapi-okupasi" className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300">
                  Terapi Okupasi
                </a>
              </li>
              <li>
                <a href="/layanan/terapi-sensori" className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300">
                  Terapi Sensori Integrasi
                </a>
              </li>
              <li>
                <a href="/layanan/terapi-perilaku" className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300">
                  Terapi Perilaku
                </a>
              </li>
              <li>
                <a href="/layanan/konsultasi-psikologi" className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300">
                  Konsultasi Psikologi
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation - Quick Links */}
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="/tentang" className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/tim" className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300">
                  Tim Terapis
                </a>
              </li>
              <li>
                <a href="/artikel" className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300">
                  Artikel
                </a>
              </li>
              <li>
                <a href="/galeri" className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300">
                  Galeri
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-500 text-sm transition-colors duration-300"
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-yellow-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                JL.Natuna, Perumahan Tiban Indah BTN Blok J No.1-2, Tiban, Tiban Indah, Kec. Sekupang, Kota Batam, Kepulauan Riau 29426
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-yellow-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                0821-9000-8929
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-yellow-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                  yametbatamtiban2@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-yellow-500 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">
                  Senin - Sabtu: 08.00 - 17.00<br />
                  Minggu: Tutup
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-6"></div>

        {/* Bottom section */}
        <div className="md:flex md:items-center md:justify-between text-sm">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-500">
              © {currentYear} Klinik Tumbuh Kembang Yamet Batam Tiban. Hak Cipta Dilindungi.
            </p>
          </div>
          <div className="flex space-x-6 justify-center md:justify-end">
            <a href="/kebijakan-privasi" className="text-gray-500 hover:text-yellow-500 transition-colors duration-300">
              Kebijakan Privasi
            </a>
            <a href="/syarat-ketentuan" className="text-gray-500 hover:text-yellow-500 transition-colors duration-300">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;