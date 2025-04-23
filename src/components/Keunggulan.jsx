import { useState } from 'react';
import { 
  UserCheck, 
  Heart, 
  Droplets, 
  Sun, 
  Palette, 
  Award 
} from 'lucide-react';

const Keunggulan = () => {
  const keunggulan = [
    {
      icon: <UserCheck size={24} />,
      title: "Individualized Program",
      description: "Program terapi yang dirancang sesuai kebutuhan masing-masing anak, menjadikan tumbuh kembang anak lebih optimal.",
      color: "blue"
    },
    {
      icon: <Heart size={24} />,
      title: "Corporate Social Responsibility",
      description: "Berkomitmen untuk bertanggung jawab secara sosial pada masyarakat dan lingkungan dengan beragam kegiatan positif.",
      color: "green"
    },
    {
      icon: <Droplets size={24} />,
      title: "Kebersihan Terjaga",
      description: "Kebersihan klinik selalu terjaga, menerapkan konsep ruangan tanpa alas kaki, dan penggunaan air purifier.",
      color: "yellow"
    },
    {
      icon: <Sun size={24} />,
      title: "Outdoor Program",
      description: "Mengadakan aktivitas outdoor secara rutin guna memberikan stimulus yang kaya untuk anak-anak.",
      color: "purple"
    },
    {
      icon: <Palette size={24} />,
      title: "Exclusive Program: Sensory Messy Play",
      description: "Mengembangkan keterampilan sensorik anak dengan bermain dengan bahan-bahan yang beragam dalam lingkungan yang terkontrol.",
      color: "pink"
    },
    {
      icon: <Award size={24} />,
      title: "Experienced",
      description: "Hingga Januari 2025, memberikan lebih dari 530 ribu jam terapi dan menangani lebih dari 16.000 pasien dengan berbagai kasus tumbuh kembang.",
      color: "red"
    }
  ];

  // Function to get color classes based on color name
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        light: "bg-blue-50",
        text: "text-blue-500",
        border: "border-blue-200"
      },
      green: {
        bg: "bg-green-500",
        light: "bg-green-50",
        text: "text-green-500",
        border: "border-green-200"
      },
      yellow: {
        bg: "bg-yellow-500",
        light: "bg-yellow-50",
        text: "text-yellow-500", 
        border: "border-yellow-200"
      },
      purple: {
        bg: "bg-purple-500",
        light: "bg-purple-50",
        text: "text-purple-500",
        border: "border-purple-200"
      },
      pink: {
        bg: "bg-pink-500",
        light: "bg-pink-50",
        text: "text-pink-500",
        border: "border-pink-200"
      },
      red: {
        bg: "bg-red-500",
        light: "bg-red-50",
        text: "text-red-500",
        border: "border-red-200"
      }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          {/* Label kecil dengan border tipis */}
          <span className="font-sf inline-block px-4 py-1 text-xs tracking-wider font-medium text-gray-600 border border-gray-200 rounded-full mb-4">
            Kualitas Terbaik
          </span>
          
          {/* Judul dengan warna amber */}
          <h2 className="font-sf text-3xl md:text-4xl font-bold mb-4 text-amber-400">Keunggulan Kami</h2>
          
          {/* Deskripsi */}
          <p className="font-sf p-2 text-sm md:text-base text-gray-500 max-w-xl mx-auto">
            Mengapa memilih Yamet Batam Tiban untuk tumbuh kembang anak Anda?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keunggulan.map((item, index) => {
            const colorClasses = getColorClasses(item.color);
            
            return (
              <div key={index} className="flex items-stretch group h-full">
                {/* Icon Box - Terpisah dari card utama, sejajar dengan tengah card */}
                <div className={`flex-shrink-0 w-16 self-center ${colorClasses.bg} rounded-lg flex items-center justify-center text-white shadow-md h-16 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                {/* Content Box - Dengan height fix untuk konsistensi */}
                <div className={`flex-grow p-5 ${colorClasses.light} border ${colorClasses.border} rounded-lg ml-4 flex flex-col justify-between group-hover:shadow-md transition-all duration-300`}>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${colorClasses.text}`}>
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className={`${colorClasses.text} text-sm font-medium flex items-center cursor-pointer hover:underline mt-auto`}>
                    Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Keunggulan;