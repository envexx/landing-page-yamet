import { useState, useRef, useEffect } from 'react';
import { MoveRight, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GaleriKegiatan = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const galleryRef = useRef(null);
  const sliderRef = useRef(null);
  
  // Data galeri dengan gambar placeholder - with 3 portrait and 7 landscape images
  const galleryItems = [
    {
      id: 1,
      src: "/image/galery/ash-gerlach-YF6Xa6G98H4-unsplash.jpg", // Landscape
      alt: "Terapi Sensori",
      title: "Sensory Messy Play",
      description: "Aktivitas terapi sensorik untuk meningkatkan perkembangan anak",
      orientation: "landscape"
    },
    {
      id: 2,
      src: "/image/galery/bambi-corro-fn3puWB0pHY-unsplash.jpg", // Portrait
      alt: "Terapi Okupasi",
      title: "Terapi Okupasi",
      description: "Melatih kemampuan motorik halus dan koordinasi tangan-mata",
      orientation: "portrait"
    },
    {
      id: 3,
      src: "/image/galery/myles-tan-WNAO036c6FM-unsplash.jpg", // Landscape
      alt: "Terapi Wicara",
      title: "Terapi Wicara",
      description: "Sesi terapi wicara individual dengan terapis berpengalaman",
      orientation: "landscape"
    },
    {
      id: 4,
      src: "/image/galery/nappy-oxBV3sO9SmQ-unsplash.jpg", // Landscape
      alt: "Terapi Perilaku",
      title: "Terapi Perilaku",
      description: "Pengembangan perilaku positif dan kemandirian anak",
      orientation: "landscape"
    },
    {
      id: 5,
      src: "/image/galery/sigmund-OV44gxH71DU-unsplash.jpg", // Portrait
      alt: "Aktivitas Kelompok",
      title: "Aktivitas Kelompok",
      description: "Kegiatan kelompok untuk mengembangkan keterampilan sosial",
      orientation: "portrait"
    },
    {
      id: 6,
      src: "/image/galery/stephen-andrews-u0zTce7KNlY-unsplash.jpg", // Landscape
      alt: "Terapi Seni",
      title: "Terapi Seni",
      description: "Mengembangkan ekspresi kreatif melalui seni",
      orientation: "landscape"
    },
    {
      id: 7,
      src: "/image/galery/nappy-oxBV3sO9SmQ-unsplash.jpg", // Landscape
      alt: "Terapi Musik",
      title: "Terapi Musik",
      description: "Stimulasi perkembangan melalui ritme dan melodi",
      orientation: "landscape"
    },
    {
      id: 8,
      src: "/image/galery/stephen-andrews-u0zTce7KNlY-unsplash.jpg", // Portrait
      alt: "Terapi Bermain",
      title: "Terapi Bermain",
      description: "Meningkatkan keterampilan sosial melalui aktivitas bermain",
      orientation: "portrait"
    },
    {
      id: 9,
      src: "/image/galery/sigmund-OV44gxH71DU-unsplash.jpg", // Landscape
      alt: "Stimulasi Motorik",
      title: "Stimulasi Motorik",
      description: "Latihan pengembangan motorik kasar dan halus",
      orientation: "landscape"
    },
    {
      id: 10,
      src: "/image/galery/ash-gerlach-YF6Xa6G98H4-unsplash.jpg", // Landscape
      alt: "Terapi Integrasi Sensori",
      title: "Integrasi Sensori",
      description: "Kegiatan integrasi sensori untuk keseimbangan sistem sensorik",
      orientation: "landscape"
    },
  ];
  
  // Buka lightbox ketika gambar diklik
  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  // Tutup lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  // Slider navigation for mobile
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };
  
  // Efek scroll animasi
  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const elements = galleryRef.current.querySelectorAll('.gallery-item');
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible) {
            el.classList.add('appear');
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          {/* Label kecil dengan border tipis */}
          <span className="font-sf inline-block px-4 py-1 text-xs tracking-wider font-medium text-gray-600 border border-gray-200 rounded-full mb-4 bg-white">
            Beragam Aktivitas
          </span>
          
          {/* Judul dengan warna yellow */}
          <h2 className="font-sf text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Galeri Kegiatan Terapi</h2>
          
          {/* Deskripsi */}
          <p className="font-sf p-2 text-sm md:text-base text-gray-500 max-w-xl mx-auto">
            Dokumentasi Terapi dan Aktivitas Anak di Yamet Batam Batu Aji
          </p>
        </div>
        
        {/* Mobile Slider Gallery (hidden on larger screens) */}
        <div className="md:hidden relative">
          {/* Slider Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md"
            onClick={scrollLeft}
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md"
            onClick={scrollRight}
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
          
          {/* Slider Container */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryItems.map((image) => (
              <div 
                key={image.id}
                className="flex-shrink-0 w-64 snap-start"
                onClick={() => openLightbox(image)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Fixed image container with aspect ratio */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-3">
                      <h3 className="text-white text-base font-medium line-clamp-1">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop Grid Gallery (hidden on mobile) */}
        <div 
          ref={galleryRef} 
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {galleryItems.map((image, index) => (
            <div 
              key={image.id}
              className="gallery-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div 
                className="h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                {/* Fixed height container for all images */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                  
                  {/* Simple hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${
                    hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="transform transition-transform duration-300">
                      <h3 className="text-white font-sf text-lg font-medium">{image.title}</h3>
                      <button className="mt-2 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                        <ZoomIn size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Simple action button */}
        <div className="mt-10 text-center">
          <button className="font-sf inline-flex items-center px-5 py-2 bg-yellow-300 text-white rounded-lg font-medium hover:bg-yellow-400 transition-colors shadow-sm">
            <span>Lihat Semua Kegiatan</span>
            <MoveRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" 
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-3xl w-full max-h-[90vh]" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute -top-10 right-0 text-white hover:text-yellow-300"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src={lightboxImage.src} 
                  alt={lightboxImage.alt} 
                  className="w-full object-contain max-h-[70vh]"
                />
              </div>
              
              <div className="p-5">
                <h3 className="font-sf text-xl font-bold text-gray-800">{lightboxImage.title}</h3>
                <p className="font-sf text-gray-600 mt-2">{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .gallery-item.appear {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default GaleriKegiatan;