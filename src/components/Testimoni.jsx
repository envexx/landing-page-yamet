import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Ibu Dewi Pratama",
      role: "Ibu dari Andi (6 tahun)",
      image: "../../public/image/testimoni/foto-testi-5.jpg", // Placeholder atau path gambar sebenarnya
      rating: 5,
      quote: "Perubahan yang sangat signifikan pada anak saya setelah terapi di sini selama 3 bulan. Awalnya belum bisa bicara dengan jelas, sekarang sudah lancar berkomunikasi."
    },
    {
      id: 2,
      name: "Bapak Rudi Hartono",
      role: "Ayah dari Bella (4 tahun)",
      image: "../../public/image/testimoni/foto-testi-4.jpg", // Placeholder atau path gambar sebenarnya
      rating: 5,
      quote: "Terapis di Yamet Batam Batu Aji sangat profesional dan sabar menangani anak saya yang hiperaktif. Sekarang perilakunya sudah jauh lebih baik dan bisa fokus lebih lama."
    },
    {
      id: 3,
      name: "Ibu Lina Wijaya",
      role: "Ibu dari Kevin (5 tahun)",
      image: "../../public/image/testimoni/foto-testi-3.jpg", // Placeholder atau path gambar sebenarnya
      rating: 5,
      quote: "Program sensory messy play sangat membantu Kevin yang sangat sensitif terhadap tekstur. Sekarang dia bahkan menikmati bermain dengan berbagai bahan seperti pasir dan lilin."
    },
    {
      id: 4,
      name: "Ibu Rani",
      role: "Orang tua dari Zahra (7 tahun)",
      image: "../../public/image/testimoni/foto-testi-2.jpg", // Placeholder atau path gambar sebenarnya
      rating: 5,
      quote: "Fasilitas bersih, terapis ramah, dan yang paling penting anak kami mengalami kemajuan pesat dalam belajar membaca dan menulis. Terima kasih Yamet Batam Batu Aji!"
    },
    {
      id: 5,
      name: "Ibu Sinta",
      role: "Ibu dari Dimas (3 tahun)",
      image: "../../public/image/testimoni/foto-testi-1.jpg", // Placeholder atau path gambar sebenarnya
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
      }, 5000); // Change slide every 5 seconds
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

  // Reset autoplay timer when user interacts
  const resetAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    // Briefly pause autoplay after manual interaction
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="py-16 bg-yellow-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          {/* Label kecil dengan border tipis */}
          <span className="font-sf inline-block px-4 py-1 text-xs tracking-wider font-medium text-gray-600 border border-gray-200 rounded-full mb-4 bg-white">
            Apa Kata Mereka
          </span>
          
          {/* Judul dengan warna yellow */}
          <h2 className="font-sf text-3xl md:text-4xl font-bold mb-4 text-white">Testimoni Orang Tua</h2>
          
          {/* Deskripsi */}
          <p className="font-sf p-2 text-sm md:text-base text-white max-w-xl mx-auto">
            Dengarkan pengalaman dan perubahan positif dari orang tua yang anak-anaknya telah mendapatkan
            layanan di Yamet Batam Batu Aji
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="overflow-hidden relative rounded-xl bg-gray-100 shadow-sm">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-100">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      {/* Quote Icon */}
                      <div className="text-yellow-200 mb-3">
                        <Quote size={28} />
                      </div>
                      
                      {/* Testimonial Text */}
                      <p className="text-gray-600 mb-4 italic">
                        "{testimonial.quote}"
                      </p>
                      
                      {/* Rating */}
                      <div className="flex items-center justify-center md:justify-start mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      
                      {/* Author Info */}
                      <div className="text-center md:text-left">
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 left-2 md:-left-5 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-2 md:-right-5 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300 hover:bg-yellow-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;