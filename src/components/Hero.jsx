import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  // State untuk counter animasi
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);
  const targetValue = 500; // Nilai target untuk counter
  const duration = 2000; // Durasi animasi dalam ms

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    // Callback untuk Intersection Observer
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Mulai animasi counter saat elemen terlihat
          animateCounter();
          observer.unobserve(entry.target);
        }
      });
    };

    // Buat Intersection Observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Amati elemen counter
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Fungsi untuk animasi counter
  const animateCounter = () => {
    const start = 0;
    const end = targetValue;
    const increment = end / (duration / 16); // Perkiraan 60fps
    let current = start;

    const updateCounter = () => {
      current += increment;

      if (current < end) {
        setCounter(Math.floor(current));
        requestAnimationFrame(updateCounter);
      } else {
        setCounter(end);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <section className="w-full relative overflow-hidden px-6 md:py-20 md:px-8 min-h-[600px]">
      {/* Simple 2-way Gradient Background - white at top, light yellow at bottom */}


      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-white z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-30/50 to-white/100 animate-gradient z-0"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Container for hero content - stack vertically on mobile, side by side on larger screens */}
        <div className="flex flex-col py-10 mt-6 md:flex-row md:items-center md:justify-between md:space-x-8">

          {/* Text content - takes full width on mobile, half on larger screens */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 py-10">
            <h1 className="font-sf text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Klinik Tumbuh Kembang Yamet Batam Tiban
            </h1>
            <p className="font-sf text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
              Layanan Terapi dan Konsultasi Tumbuh Kembang Anak oleh Tim Profesional
              Berpengalaman. Kami menyediakan pendekatan holistik untuk membantu anak Anda
              mencapai potensi maksimal.
            </p>
            {/* Buttons dalam flex container dengan spacing yang tepat */}
            <div className="flex flex-row space-x-3 md:space-x-4">
              <button className="font-sf font-bold py-6 px-6 md:py-6 md:px-10 rounded-full transition duration-300 shadow-sm text-sm md:text-base relative overflow-hidden group bg-gradient-to-br from-white to-yellow-200 hover:from-gray-100 hover:to-white flex items-center justify-between border-2 border-white">
                {/* Bagian Teks */}
                <span>Jadwalkan Konsultasi</span>
                {/* Bagian Panah */}
                <div className="ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700 group-hover:text-gray-900 transition duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            {/* Kontainer utama dengan posisi relatif */}
            <div className="relative w-full h-100 md:h-96 overflow-visible flex items-center justify-center">
              {/* Gambar utama */}
              <img
                src="/image/hero-1.png"
                alt="Anak dengan terapis di Klinik Tumbuh Kembang Yamet"
                className="w-full h-auto object-bottom max-h-[800px] -mt-10 md:mt-10 md:object-contain"
              />

              {/* Lonceng pertama yang ditempatkan di atas gambar */}
              <img
                src="/image/icon/lonceng.png"
                alt="Lonceng"
                className="hidden bounce-animation md:block absolute top-3 left-1/4 z-40 w-[200px] h-[200px] md:w-[150px] md:h-[150px]"
              />

              <img
                src="/image/icon/roket.png"
                alt="Lonceng Besar"
                className="hidden roket md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 z-100 w-[300px] h-[300px]"
              />

              {/* Lonceng kedua yang lebih besar, diputar, dan melewati batas section */}


              {/* Overlay warna untuk efek desain */}
              {/* <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-yellow-400/40 to-transparent"></div> */}

              {/* Indikator kepercayaan dengan animasi counter */}
              <div className="absolute bottom-2 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
                <p className="text-sm font-medium text-gray-800" ref={counterRef}>
                  <span className="font-bold">{counter}+ </span>
                  Keluarga Percaya
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Tambahkan kode CSS berikut ke file CSS global atau tailwind.config.js
// @keyframes gradient {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
// 
// .animate-gradient {
//   background-size: 200% 200%;
//   animation: gradient 6s ease infinite;
// }

export default Hero;