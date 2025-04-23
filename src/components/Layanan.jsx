import { useState } from 'react';
import { MessageSquare, BookOpen, Activity, Users, Clock, Award } from 'lucide-react';

export default function Layanan() {
  const [activeCard, setActiveCard] = useState(null);
  
  const layanan = [
    {
      icon: <MessageSquare size={24} />,
      title: "Konsultasi Psikologi",
      description: "Layanan konsultasi dengan psikolog anak untuk masalah tumbuh kembang",
      bgColor: "bg-rose-50",
      accentColor: "bg-rose-100",
      textColor: "text-rose-500",
      imagePath: "../../public/image/layanan-1.png" // Path gambar yang sebenarnya
    },
    {
      icon: <BookOpen size={24} />,
      title: "Terapi Belajar",
      description: "Program khusus untuk anak dengan kesulitan belajar atau gangguan konsentrasi",
      bgColor: "bg-blue-50",
      accentColor: "bg-blue-100",
      textColor: "text-blue-500",
      imagePath: "../../public/image/layanan-2.png" // Path gambar yang sebenarnya
    },
    {
      icon: <Activity size={24} />,
      title: "Stimulasi Tumbuh Kembang",
      description: "Program stimulasi untuk mengoptimalkan perkembangan motorik dan kognitif",
      bgColor: "bg-green-50",
      accentColor: "bg-green-100",
      textColor: "text-green-500",
      imagePath: "../../public/image/layanan-3.png" // Path gambar yang sebenarnya
    },
    {
      icon: <Users size={24} />,
      title: "Parenting Class",
      description: "Kelas untuk orang tua tentang pola asuh dan tumbuh kembang anak",
      bgColor: "bg-amber-50",
      accentColor: "bg-amber-100",
      textColor: "text-amber-500",
      imagePath: "../../public/image/layanan-4.png" // Path gambar yang sebenarnya
    },
    {
      icon: <Clock size={24} />,
      title: "Early Detection",
      description: "Pemeriksaan dan deteksi dini keterlambatan tumbuh kembang pada anak",
      bgColor: "bg-purple-50",
      accentColor: "bg-purple-100",
      textColor: "text-purple-500",
      imagePath: "../../public/image/layanan-5.png" // Path gambar yang sebenarnya
    },
    {
      icon: <Award size={24} />,
      title: "Terapi Perilaku",
      description: "Program terapi untuk menangani gangguan perilaku dan emosi pada anak",
      bgColor: "bg-cyan-50",
      accentColor: "bg-cyan-100",
      textColor: "text-cyan-500",
      imagePath: "../../public/image/layanan-6.png" // Path gambar yang sebenarnya
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          {/* Label kecil dengan border tipis */}
          <span className="font-sf inline-block px-4 py-1 text-xs tracking-wider font-medium text-gray-600 border border-gray-200 rounded-full mb-4">
            Nikmati Layanan Kami
          </span>
          
          {/* Judul dengan warna amber */}
          <h2 className="font-sf text-3xl md:text-4xl font-bold mb-4 text-amber-400">Layanan Kami</h2>
          
          {/* Deskripsi */}
          <p className="font-sf p-2 text-sm md:text-base text-gray-500 max-w-xl mx-auto">
            Klinik Tumbuh Kembang Anak Yamet Batam Tiban menyediakan layanan
            terbaik untuk mendukung perkembangan optimal anak Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layanan.map((item, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden h-64 transition-all duration-300 hover:shadow-lg ${item.bgColor}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background shape */}
              <div className={`absolute right-0 top-0 w-32 h-32 rounded-full ${item.accentColor} opacity-30 -mr-10 -mt-10`}></div>
              
              {/* Content and image container */}
              <div className="flex h-full">
                {/* Text content - menggunakan 60% lebar */}
                <div className="w-4/5 p-6 flex flex-col h-full relative z-10">
                  {/* Icon */}
                  <div className={`${item.textColor} mb-3`}>
                    {item.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                  
                  <button className={`mt-auto text-sm font-medium ${item.textColor} hover:underline flex items-center`}>
                    Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                {/* Image container - menggunakan 40% lebar */}
                <div className="w-2/5 relative">
                  {/* Gambar terapis - pastikan ini gambar PNG dengan background transparan */}
                  <img 
                    src={item.imagePath} 
                    alt={item.title}
                    className="h-full w-full min-h-[300px] min-w-[250px] -ml-11 object-contain md:-ml-14 md:max-h-[200px] md:p-4 md:min-w-[250px] lg:-ml-14" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}