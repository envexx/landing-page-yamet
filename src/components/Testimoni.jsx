import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Ibu Dewi Pratama",
      role: "Ibu dari Andi (6 tahun)",
      image: "/image/testimoni/foto-testi-5.webp",
      rating: 5,
      quote: "Perubahan yang sangat signifikan pada anak saya setelah terapi di sini selama 3 bulan. Awalnya belum bisa bicara dengan jelas, sekarang sudah lancar berkomunikasi."
    },
    {
      id: 2,
      name: "Bapak Rudi Hartono",
      role: "Ayah dari Bella (4 tahun)",
      image: "/image/testimoni/foto-testi-4.webp",
      rating: 5,
      quote: "Terapis di Yamet Batam Batu Aji sangat profesional dan sabar menangani anak saya yang hiperaktif. Sekarang perilakunya sudah jauh lebih baik dan bisa fokus lebih lama."
    },
    {
      id: 3,
      name: "Ibu Lina Wijaya",
      role: "Ibu dari Kevin (5 tahun)",
      image: "/image/testimoni/foto-testi-3.webp",
      rating: 5,
      quote: "Program sensory messy play sangat membantu Kevin yang sangat sensitif terhadap tekstur. Sekarang dia bahkan menikmati bermain dengan berbagai bahan seperti pasir dan lilin."
    },
    {
      id: 4,
      name: "Ibu Rani",
      role: "Orang tua dari Zahra (7 tahun)",
      image: "/image/testimoni/foto-testi-2.webp",
      rating: 5,
      quote: "Fasilitas bersih, terapis ramah, dan yang paling penting anak kami mengalami kemajuan pesat dalam belajar membaca dan menulis. Terima kasih Yamet Batam Batu Aji!"
    },
    {
      id: 5,
      name: "Ibu Sinta",
      role: "Ibu dari Dimas (3 tahun)",
      image: "/image/testimoni/foto-testi-1.webp",
      rating: 4,
      quote: "Sangat senang dengan program outdoor yang diadakan secara rutin. Dimas jadi lebih berani bersosialisasi dan motorik kasarnya berkembang dengan baik."
    }
  ];

  // Setup autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
    }
    
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoPlay();
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    resetAutoPlay();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const resetAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full opacity-15 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">APA KATA MEREKA</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Testimoni Orang Tua
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Dengarkan pengalaman dan perubahan positif dari orang tua yang anak-anaknya telah mendapatkan
            layanan di <span className="font-semibold text-yellow-600">Yamet Batam Batu Aji</span>
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/80 backdrop-blur-sm border border-white/20">
            <div 
              className="flex transition-all duration-700 ease-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12 relative overflow-hidden">
                  {/* Clean minimal border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 opacity-50"></div>
                  
                  <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                    {/* Avatar Section */}
                    <div className="flex-shrink-0 relative group">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-600">
                            {testimonial.name.split(' ')[1]?.[0] || testimonial.name[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-grow text-center lg:text-left">
                      {/* Quote Icon */}
                      <div className="relative mb-6">
                        <Quote size={40} className="text-yellow-400 mx-auto lg:mx-0 opacity-80" />
                      </div>
                      
                      {/* Testimonial Text */}
                      <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-medium italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Rating */}
                      <div className="flex items-center justify-center lg:justify-start mb-4 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            className={`transition-colors duration-300 ${
                              i < testimonial.rating 
                                ? "text-yellow-400 fill-yellow-400" 
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-500 font-medium">
                          ({testimonial.rating}/5)
                        </span>
                      </div>
                      
                      {/* Author Info */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button 
                onClick={goToPrev}
                className="group w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 hover:shadow-xl transition-all duration-300 hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              
              <button 
                onClick={goToNext}
                className="group w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 hover:shadow-xl transition-all duration-300 hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex 
                      ? 'bg-yellow-500 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-yellow-500 rounded-full animate-ping opacity-75"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Auto-play Control */}
            <button
              onClick={toggleAutoPlay}
              className={`w-12 h-12 rounded-full shadow-lg border flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                isAutoPlaying 
                  ? 'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600' 
                  : 'bg-white text-gray-600 border-gray-100 hover:bg-gray-50'
              }`}
              aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-300"
              style={{ 
                width: `${((currentIndex + 1) / testimonials.length) * 100}%` 
              }}
            ></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-yellow-600 mb-1">100+</div>
            <div className="text-sm text-gray-600">Anak Terbantu</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-blue-600 mb-1">4.9</div>
            <div className="text-sm text-gray-600">Rating Rata-rata</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-green-600 mb-1">95%</div>
            <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-purple-600 mb-1">3+</div>
            <div className="text-sm text-gray-600">Tahun Pengalaman</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;