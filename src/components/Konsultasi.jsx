import { useEffect } from 'react';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Konsultasi = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=6282190008929&text=Assalamualaikum%21%20%3A%29%20%0D%0AHalo%20Yamet%20Batu%20Aji..%20Saya%20mau%20daftar%20Observasi%20dan%20Assessment%20tumbuh%20kembang%20anak..%20%0D%0A_%2AMohon%20isi%20form%20singkat%20berikut%2A_%20%0D%0A1.%20Nama%20Lengkap%20Anak%20%3A%20%0D%0A2.%20Nama%20Panggilan%20%3A%20%0D%0A3.%20TTL%20%3A%20%0D%0A4.%20Usia%20%3A%20%0D%0A5.%20Keluhan%20%28tuliskan%20minimal%203%29%20%3A%20%0D%0A%20%20%20%20a.%20%0D%0A%20%20%20%20b.%20%0D%0A%20%20%20%20c.%20%0D%0A6.%20Nama%20Ayah%20%3A%20%0D%0A7.%20Nama%20Bunda%20%3A%20%0D%0A8.%20Usaha%20apa%20yang%20sudah%20dilakukan%20selama%20ini%20%3A%20%0D%0A9.%20Kendala%20dalam%20melakukan%20usaha%20tersebut%20%3A%20%0D%0AMengetahui%20Yamet%20Child%20Development%20Center%20dari%3F%20%3A";

  const handleWhatsAppRedirect = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {/* Back Button */}
        <div className="text-left mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo/yamet.webp" 
            alt="Yamet Logo" 
            className="h-20 mx-auto"
          />
        </div>

        {/* Thank You Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Terima Kasih! 🙏
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Konsultasi Anda akan diarahkan ke WhatsApp untuk melanjutkan proses pendaftaran Observasi dan Assessment tumbuh kembang anak.
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="mb-8">
          <button
            onClick={handleWhatsAppRedirect}
            className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="mr-3 text-2xl" />
            Lanjutkan ke WhatsApp
          </button>
        </div>

        {/* Additional Info */}
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Apa yang akan terjadi selanjutnya?
          </h3>
          <ul className="text-left text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">1.</span>
              Anda akan diarahkan ke chat WhatsApp dengan tim Yamet
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">2.</span>
              Tim akan memandu Anda mengisi form pendaftaran
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">3.</span>
              Jadwal konsultasi akan diatur sesuai ketersediaan
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
                     <p className="text-gray-600">
             Jika ada pertanyaan, silakan hubungi kami di{' '}
             <span className="font-semibold text-blue-600">+62 821-9000-8929</span>
           </p>
        </div>
      </div>
    </div>
  );
};

export default Konsultasi;
