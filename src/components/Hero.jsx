import React, { useState, useEffect, useRef } from "react";
import { WHATSAPP_LINK } from "../constants/links";

const Hero = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);
  const targetValue = 500;
  const duration = 2000;

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return undefined;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  const animateCounter = () => {
    const start = 0;
    const end = targetValue;
    const increment = end / (duration / 16);
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
    <section className="relative overflow-hidden w-full bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="pointer-events-none absolute left-1/2 top-[-35%] h-[320px] w-[120%] -translate-x-1/2 bg-amber-100/70 blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 bottom-[-40%] h-[360px] w-[130%] -translate-x-1/2 bg-orange-200/60 blur-[180px]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-[240px] w-[320px] -translate-y-1/2 bg-gradient-to-br from-amber-100/60 via-transparent to-transparent blur-[120px] lg:block" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-7xl flex-col px-6 pt-28 pb-20 lg:flex-row lg:items-center lg:justify-between lg:px-8 xl:px-10">
        <div className="max-w-2xl space-y-8 lg:max-w-xl xl:max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-amber-600 shadow-sm backdrop-blur">
            Klinik Yamet Batam Tiban
          </span>

          <h1 className="font-sf text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Pendampingan Profesional untuk <span className="text-amber-500">Tumbuh Kembang Optimal</span>
          </h1>

          <p className="font-sf text-base text-gray-600 sm:text-lg lg:text-xl">
            Dapatkan asesmen dan terapi terintegrasi dari tim ahli Yamet Batam Tiban. Fokus kami pada kebutuhan unik setiap anak membantu keluarga meraih kemajuan nyata dan konsisten.
          </p>

          <div className="flex flex-wrap items-center gap-4">
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
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 px-7 py-4 font-sf text-base font-semibold text-white shadow-lg shadow-amber-300/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span>Jadwalkan Konsultasi</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#layanan"
              className="inline-flex items-center gap-2 font-sf text-base font-semibold text-gray-700 transition-colors duration-300 hover:text-amber-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-9-9" />
                <path d="M21 3 12 12" />
              </svg>
              <span>Lihat Layanan Kami</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-4 rounded-2xl bg-white/80 px-6 py-4 shadow-sm backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12 4 4 10-10" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="font-sf text-sm font-medium uppercase tracking-wide text-gray-500">Keluarga Percaya</p>
                <p ref={counterRef} className="font-sf text-3xl font-semibold text-gray-900">
                  {counter}+
                </p>
              </div>
            </div>

            <div className="flex max-w-xs items-center gap-4 rounded-2xl bg-white/80 px-6 py-4 shadow-sm backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92a5 5 0 0 1-5 5 10.66 10.66 0 0 1-4.75-1.18l-5.51 1.82 1.82-5.51A10.66 10.66 0 0 1 7.05 8.1a5 5 0 1 1 9.9 0 10.66 10.66 0 0 1 4.51 8.82Z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="font-sf text-sm font-medium uppercase tracking-wide text-gray-500">Respon Cepat</p>
                <p className="font-sf text-lg font-semibold text-gray-900">Konsultasi via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 w-full max-w-xl self-stretch lg:mt-0 lg:max-w-2xl">
          <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center">
            <picture>
              <source srcSet="/image/hero-1.webp" type="image/webp" />
              <img
                src="/image/hero-1.png"
                alt="Anak menjalani sesi terapi di Yamet Batam Tiban"
                className="w-full max-h-[560px] object-contain drop-shadow-[0_28px_60px_rgba(252,211,77,0.35)]"
              />
            </picture>
          </div>

          <picture>
            <source srcSet="/image/icon/lonceng.webp" type="image/webp" />
            <img
              src="/image/icon/lonceng.png"
              alt="Ikon anak ceria"
              className="absolute -top-10 right-8 hidden w-32 animate-bounce md:block lg:w-36"
            />
          </picture>

          <picture>
            <source srcSet="/image/icon/roket.webp" type="image/webp" />
            <img
              src="/image/icon/roket.png"
              alt="Ikon roket pertumbuhan"
              className="absolute bottom-[-40px] left-[-20px] hidden w-40 rotate-[12deg] md:block lg:w-48"
            />
          </picture>
          

          <div className="absolute -bottom-10 right-5 hidden w-full max-w-xs rounded-3xl bg-white/90 p-5 shadow-xl shadow-amber-200/60 backdrop-blur md:block">
            <p className="font-sf text-xs font-semibold uppercase tracking-wider text-amber-500">Program Terintegrasi</p>
            <p className="font-sf mt-2 text-sm text-gray-600">
              Sesi asesmen, terapi individual, dan dukungan keluarga dalam satu rangkaian terencana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
