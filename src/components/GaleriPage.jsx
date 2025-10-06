import { useState, useEffect, useMemo } from "react";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_IMAGES } from "../constants/gallery";
import { WHATSAPP_LINK } from "../constants/links";

const GaleriPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(GALLERY_IMAGES.map((item) => item.category)));
    return ["Semua", ...unique];
  }, []);

  const displayedImages = useMemo(() => {
    if (selectedCategory === "Semua") {
      return GALLERY_IMAGES;
    }
    return GALLERY_IMAGES.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    document.body.style.overflow = "auto";
  };

  const showPrev = (event) => {
    event.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + displayedImages.length) % displayedImages.length);
  };

  const showNext = (event) => {
    event.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % displayedImages.length);
  };

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev(event);
      if (event.key === "ArrowRight") showNext(event);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeIndex]);

  return (
    <div className="bg-white pt-28 pb-20 min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-6 text-center pb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700 uppercase tracking-wide">
            Dokumentasi Kegiatan
          </span>
          <h1 className="font-sf mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Potret Perjalanan Anak di Yamet Batam Tiban
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            Kami percaya setiap kemajuan layak dirayakan. Berikut dokumentasi sesi terapi, aktivitas kelompok,
            dan momen kebersamaan yang kami abadikan untuk orang tua.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const isActive = category === selectedCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-amber-500 bg-amber-500 text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-amber-600"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative block overflow-hidden rounded-3xl bg-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 text-left">
                <p className="text-sm font-semibold text-white">{image.category}</p>
                <p className="text-xs text-white/80">{image.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-16 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 p-10 text-white text-center shadow-xl">
          <div className="flex justify-center mb-5">
            <div className="rounded-full bg-white/20 p-3">
              <Camera className="h-8 w-8" />
            </div>
          </div>
          <h2 className="font-sf text-2xl md:text-3xl font-bold mb-3">Ingin Jadwalkan Dokumentasi Anak?</h2>
          <p className="text-base md:text-lg text-white/90 mb-6">
            Tim Yamet siap membantu orang tua mencatat setiap kemajuan. Hubungi kami untuk mendapatkan jadwal asesmen dan terapi yang sesuai.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 font-semibold text-amber-600 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Konsultasi via WhatsApp
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition"
            onClick={closeLightbox}
            aria-label="Tutup galeri"
          >
            <X size={36} />
          </button>

          <button
            type="button"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition"
            onClick={showPrev}
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative max-w-5xl w-full">
            <img
              src={displayedImages[activeIndex].src}
              alt={displayedImages[activeIndex].alt}
              className="w-full max-h-[82vh] object-contain rounded-3xl bg-white"
            />
            <p className="mt-4 text-center text-white/80 text-sm">
              {displayedImages[activeIndex].alt}
            </p>
          </div>

          <button
            type="button"
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition"
            onClick={showNext}
            aria-label="Foto selanjutnya"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GaleriPage;
