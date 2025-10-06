import { useState } from 'react';
import { 
  UserCheck, 
  Heart, 
  Shield, 
  Palette, 
  Award,
  Star
} from 'lucide-react';

const Keunggulan = () => {
  const keunggulan = [
    {
      icon: <UserCheck size={40} />,
      title: "Program Individual",
      subtitle: "Disesuaikan Khusus untuk Anak Anda",
      description: "Setiap anak unik. Program terapi kami dirancang khusus sesuai kebutuhan dan kondisi masing-masing anak untuk hasil yang optimal.",
      stats: "100% Personalized",
      color: "blue"
    },
    {
      icon: <Award size={40} />,
      title: "Berpengalaman & Terpercaya",
      subtitle: "Ribuan Keluarga Telah Merasakan Manfaatnya",
      description: "Dengan lebih dari 530 ribu jam terapi dan 16.000+ pasien yang telah ditangani, kami adalah pilihan terpercaya untuk tumbuh kembang anak.",
      stats: "16,000+ Pasien",
      color: "green"
    },
    {
      icon: <Shield size={40} />,
      title: "Standar Kebersihan Tinggi",
      subtitle: "Lingkungan Aman & Higienis",
      description: "Klinik dengan konsep tanpa alas kaki, air purifier di setiap ruangan, dan protokol kebersihan ketat untuk keamanan anak Anda.",
      stats: "100% Hygienic",
      color: "cyan"
    },
    {
      icon: <Palette size={40} />,
      title: "Sensory Messy Play Eksklusif",
      subtitle: "Program Inovatif untuk Stimulasi Sensorik",
      description: "Program eksklusif yang mengembangkan keterampilan sensorik anak melalui bermain terkontrol dengan berbagai tekstur dan bahan.",
      stats: "Program Eksklusif",
      color: "purple"
    }
  ];

  // Function to get color classes based on color name
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        light: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-100",
        accent: "bg-blue-500"
      },
      green: {
        bg: "from-green-500 to-green-600",
        light: "bg-green-50",
        text: "text-green-600",
        border: "border-green-100",
        accent: "bg-green-500"
      },
      cyan: {
        bg: "from-cyan-500 to-cyan-600",
        light: "bg-cyan-50",
        text: "text-cyan-600",
        border: "border-cyan-100",
        accent: "bg-cyan-500"
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        light: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-100",
        accent: "bg-purple-500"
      }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -ml-48 -mb-48"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-sf inline-block px-6 py-2 text-sm tracking-wider font-medium text-amber-700 bg-amber-100 rounded-full mb-6">
            Mengapa Memilih Kami?
          </span>
          
          <h2 className="font-sf text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Keunggulan <span className="text-amber-500">Yamet Batam Tiban</span>
          </h2>
          
          <p className="font-sf text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dipercaya ribuan keluarga sebagai partner terbaik dalam mendampingi tumbuh kembang anak
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {keunggulan.map((item, index) => {
            const colorClasses = getColorClasses(item.color);
            
            return (
              <div 
                key={index} 
                className="group relative"
              >
                <div className={`${colorClasses.light} ${colorClasses.border} border-2 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden`}>
                  {/* Background accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${colorClasses.accent} opacity-10 rounded-full -mr-16 -mt-16`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${colorClasses.bg} rounded-2xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className={`text-base font-semibold ${colorClasses.text} uppercase tracking-wide mb-3`}>
                      {item.subtitle}
                    </p>
                    
                    {/* Stats badge - dipindah ke bawah title */}
                    <div className={`inline-block px-4 py-2 ${colorClasses.text} bg-white rounded-full text-sm font-bold border ${colorClasses.border} mb-4 shadow-sm`}>
                      {item.stats}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className={`absolute bottom-0 left-0 h-1 ${colorClasses.accent} w-0 group-hover:w-full transition-all duration-500 ease-out`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="w-6 h-6 text-amber-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 font-medium">
            Dipercaya oleh <span className="text-amber-600 font-bold">16,000+ keluarga</span> di Batam dan sekitarnya
          </p>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Siap Memberikan yang Terbaik untuk Anak Anda?
            </h3>
            <p className="text-gray-600 mb-6">
              Konsultasikan kebutuhan tumbuh kembang anak Anda dengan tim ahli kami
            </p>
            <button className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keunggulan;