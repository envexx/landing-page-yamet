import React, { useState } from "react";
import { ChevronDown, MessageCircle, Phone, ArrowRight, HelpCircle, Users, Clock, Calendar } from "lucide-react";
import { WHATSAPP_LINK } from "../constants/links";

const FAQSection = () => {
  // FAQ data - replace with your actual questions and answers
  const faqItems = [
    {
      question: "Apa saja layanan terapi yang tersedia di Klinik Yamet?",
      answer: "Klinik Yamet menyediakan berbagai layanan terapi seperti terapi wicara, terapi okupasi, terapi sensori integrasi, terapi perilaku, dan konsultasi psikologi untuk membantu tumbuh kembang anak.",
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      question: "Berapa usia anak yang dapat menerima terapi di klinik?",
      answer: "Kami melayani anak-anak dari segala usia, mulai dari balita hingga remaja. Program terapi akan disesuaikan dengan kebutuhan dan tahap perkembangan anak Anda.",
      icon: <Users className="w-5 h-5" />
    },
    {
      question: "Bagaimana cara mendaftarkan anak untuk konsultasi pertama?",
      answer: "Anda dapat mendaftarkan anak untuk konsultasi pertama melalui nomor telepon kami di 0821-9000-8929 atau mengisi formulir pendaftaran online di website kami. Tim kami akan menghubungi Anda untuk menjadwalkan waktu yang sesuai.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      question: "Apakah orang tua bisa ikut serta dalam proses terapi?",
      answer: "Ya, keterlibatan orang tua sangat penting. Kami menyediakan sesi edukasi dan bimbingan agar terapi bisa dilanjutkan juga di rumah. Terapi bukan hanya saat di klinik, tapi harus menjadi bagian dari rutinitas anak sehari-hari.",
      icon: <Users className="w-5 h-5" />
    },
    {
      question: "Berapa lama biasanya sesi terapi berlangsung?",
      answer: "Sesi terapi standar berlangsung sekitar 45-60 menit, tergantung pada jenis terapi dan kebutuhan individual anak. Durasi dan frekuensi terapi akan direkomendasikan oleh terapis setelah asesmen awal.",
      icon: <Clock className="w-5 h-5" />
    }
  ];

  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(null);

  // Toggle FAQ item open/close
  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null); // Close if already open
    } else {
      setOpenItem(index); // Open the clicked item
    }
  };

  return (
    <section className="w-full relative overflow-hidden py-20">
      {/* Background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-200 rounded-full opacity-25 blur-lg"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-6 shadow-sm">
            <MessageCircle className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 tracking-wide">FAQ</span>
          </div>
          
                     <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text">
             Pertanyaan yang Sering Diajukan
           </h2>
          
                     <p className="text-lg text-primary-700 max-w-3xl mx-auto leading-relaxed">
             Temukan jawaban untuk pertanyaan umum tentang layanan terapi 
             dan program tumbuh kembang anak di <span className="font-semibold text-primary-600">Klinik Yamet Batam Tiban</span>.
           </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4 mb-16">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-white/90 group"
            >
              {/* Question - always visible */}
              <button
                onClick={() => toggleItem(index)}
                                 className="w-full px-6 md:px-8 py-6 text-left flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-opacity-50 rounded-2xl"
                aria-expanded={openItem === index}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openItem === index 
                    ? 'bg-primary-100 text-primary-600 scale-110' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-primary-50 group-hover:text-primary-600'
                }`}>
                  {item.icon}
                </div>
                
                {/* Question text */}
                                 <span className="flex-grow font-semibold text-base md:text-lg text-primary-800 group-hover:text-primary-900">
                   {item.question}
                 </span>
                
                {/* Arrow icon */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transform transition-all duration-300 ${
                  openItem === index 
                    ? 'rotate-180 bg-primary-100' 
                    : 'group-hover:bg-primary-50'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${
                    openItem === index ? 'text-primary-600' : 'text-gray-600 group-hover:text-primary-600'
                  }`} />
                </div>
              </button>
              
              {/* Answer - visible only when this item is open */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6">
                  <div className="ml-16 pl-4 border-l-2 border-primary-200">
                                       <p className="text-primary-700 text-base leading-relaxed">
                     {item.answer}
                   </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4),_transparent)]" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-sm">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Tim ahli kami siap membantu Anda dengan konsultasi gratis untuk menentukan 
              program terapi terbaik bagi anak Anda.
            </p>
            
            {/* Contact options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:082190008929"
                className="inline-flex items-center gap-3 bg-white text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <Phone className="w-5 h-5 text-amber-600 group-hover:rotate-12 transition-transform" />
                Hubungi Sekarang
                <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-white/80 text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Konsultasi Online
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
            <div className="text-sm text-primary-700">FAQ Terjawab</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
            <div className="text-sm text-primary-700">Support Online</div>
          </div>
          <div className="text-center p-2 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
            <div className="text-sm text-primary-700">Konsultasi Gratis</div>
          </div>
          <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-primary-600 mb-1">5/5</div>
            <div className="text-sm text-primary-700">Rating Layanan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;