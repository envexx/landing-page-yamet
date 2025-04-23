import React, { useState } from "react";

const FAQSection = () => {
  // FAQ data - replace with your actual questions and answers
  const faqItems = [
    {
      question: "Apa saja layanan terapi yang tersedia di Klinik Yamet?",
      answer: "Klinik Yamet menyediakan berbagai layanan terapi seperti terapi wicara, terapi okupasi, terapi sensori integrasi, terapi perilaku, dan konsultasi psikologi untuk membantu tumbuh kembang anak."
    },
    {
      question: "Berapa usia anak yang dapat menerima terapi di klinik?",
      answer: "Kami melayani anak-anak dari segala usia, mulai dari balita hingga remaja. Program terapi akan disesuaikan dengan kebutuhan dan tahap perkembangan anak Anda."
    },
    {
      question: "Bagaimana cara mendaftarkan anak untuk konsultasi pertama?",
      answer: "Anda dapat mendaftarkan anak untuk konsultasi pertama melalui nomor telepon kami di 0821-9000-8929 atau mengisi formulir pendaftaran online di website kami. Tim kami akan menghubungi Anda untuk menjadwalkan waktu yang sesuai."
    },
    {
      question: "Apakah orang tua bisa ikut serta dalam proses terapi?",
      answer: "Ya, keterlibatan orang tua sangat penting. Kami menyediakan sesi edukasi dan bimbingan agar terapi bisa dilanjutkan juga di rumah. Terapi bukan hanya saat di klinik, tapi harus menjadi bagian dari rutinitas anak sehari-hari."
    },
    {
      question: "Berapa lama biasanya sesi terapi berlangsung?",
      answer: "Sesi terapi standar berlangsung sekitar 45-60 menit, tergantung pada jenis terapi dan kebutuhan individual anak. Durasi dan frekuensi terapi akan direkomendasikan oleh terapis setelah asesmen awal."
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
    <section className="w-full bg-gradient-to-br from-yellow-200 to-yellow-100 py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="font-sf inline-block px-4 py-1 text-xs tracking-wider font-medium text-yellow-500 bg-white rounded-full mb-4 shadow-sm">
            FAQ
          </span>
          <h2 className="font-sf text-3xl md:text-4xl font-bold text-black mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="font-sf text-black text-sm md:text-base max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan terapi 
            dan program tumbuh kembang anak di Klinik Yamet Batam Batu Aji.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="font-sf bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Question - always visible */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                aria-expanded={openItem === index}
              >
                <span className="font-medium text-base">
                  {item.question}
                </span>
                {/* Arrow icon - down or up */}
                <span className={`text-yellow-500 ml-2 transform transition-transform duration-300 ${openItem === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              
              {/* Answer - visible only when this item is open */}
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openItem === index ? 'max-h-72 py-4' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-gray-600 text-sm md:text-base pb-4 border-t border-gray-100 pt-2">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="font-sf mb-6">
            Masih punya pertanyaan lain? Hubungi kami untuk informasi lebih lanjut.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=6282385089800&text=Assalamualaikum%21%20%3A%29%20%0D%0AHalo%20Yamet%20Batu%20Aji..%20Saya%20mau%20daftar%20Observasi%20dan%20Assessment%20tumbuh%20kembang%20anak..%20%0D%0A_%2AMohon%20isi%20form%20singkat%20berikut%2A_%20%0D%0A1.%20Nama%20Lengkap%20Anak%20%3A%20%0D%0A2.%20Nama%20Panggilan%20%3A%20%0D%0A3.%20TTL%20%3A%20%0D%0A4.%20Usia%20%3A%20%0D%0A5.%20Keluhan%20%28tuliskan%20minimal%203%29%20%3A%20%0D%0A%20%20%20%20a.%20%0D%0A%20%20%20%20b.%20%0D%0A%20%20%20%20c.%20%0D%0A6.%20Nama%20Ayah%20%3A%20%0D%0A7.%20Nama%20Bunda%20%3A%20%0D%0A8.%20Usaha%20apa%20yang%20sudah%20dilakukan%20selama%20ini%20%3A%20%0D%0A9.%20Kendala%20dalam%20melakukan%20usaha%20tersebut%20%3A%20%0D%0AMengetahui%20Yamet%20Child%20Development%20Center%20dari%3F%20%3A" 
            className="font-sf inline-flex items-center gap-2 bg-white text-black hover:bg-yellow-50 px-6 py-3 rounded-full font-medium transition duration-300 shadow-md hover:shadow-lg"
          >
            Konsultasi Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;