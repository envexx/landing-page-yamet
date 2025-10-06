import { useState, useEffect } from 'react';
import { ArrowRight, X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants/gallery';

const featuredImages = GALLERY_IMAGES.filter(image => image.featured);

const GaleriKegiatan = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showPrev = (event) => {
    event.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
  };

  const showNext = (event) => {
    event.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % featuredImages.length);
  };

  const goToGallery = () => {
    window.location.href = '/galeri';
  };

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrev(event);
      if (event.key === 'ArrowRight') showNext(event);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeIndex]);

  useEffect(() => () => {
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200 rounded-full opacity-10 -ml-36 -mt-36" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-10 -mr-48 -mb-48" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-sf inline-block px-6 py-2 text-sm tracking-wider font-medium text-amber-700 bg-amber-100 rounded-full mb-6">
            Dokumentasi Kegiatan
          </span>

          <h2 className="font-sf text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Galeri <span className="text-amber-500">Klinik Yamet</span>
          </h2>

          <p className="font-sf text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kumpulan dokumentasi kegiatan dan sesi terapi terbaru di Klinik Yamet Batam Tiban.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative block overflow-hidden rounded-3xl bg-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={goToGallery}
            className="group bg-gradient-to-r from-amber-400 to-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-3"
          >
            <Camera size={20} />
            <span>Lihat Semua Galeri</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>

          <div className="text-gray-500 text-sm flex items-center space-x-2">
            <span>Dokumentasi terbaru Yamet</span>
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">{featuredImages.length} foto</span>
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition"
            onClick={closeLightbox}
            aria-label="Tutup galeri"
          >
            <X size={32} />
          </button>

          <button
            type="button"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition"
            onClick={showPrev}
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="relative max-w-4xl w-full">
            <img
              src={featuredImages[activeIndex].src}
              alt={featuredImages[activeIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-3xl bg-white"
            />
          </div>

          <button
            type="button"
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition"
            onClick={showNext}
            aria-label="Foto selanjutnya"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GaleriKegiatan;
