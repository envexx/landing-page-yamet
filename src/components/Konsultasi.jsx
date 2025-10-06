import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Konsultasi = () => {
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

        {/* Main Content */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Konsultasi Tumbuh Kembang Anak
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Silakan hubungi kami untuk mendaftar Observasi dan Assessment tumbuh kembang anak.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Informasi Kontak
          </h3>
          <div className="text-left text-gray-700 space-y-3">
            <div className="flex items-center">
              <span className="text-blue-500 font-bold mr-3">📞</span>
              <span>Telepon: <span className="font-semibold">+62 821-9000-8929</span></span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 font-bold mr-3">📧</span>
              <span>Email: <span className="font-semibold">yametbatamtiban2@gmail.com</span></span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 font-bold mr-3">📍</span>
              <span>Alamat: JL.Natuna, Perumahan Tiban Indah BTN Blok J No.1-2, Tiban, Tiban Indah, Kec. Sekupang, Kota Batam</span>
            </div>
          </div>
        </div>

        {/* Process Info */}
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            Proses Konsultasi
          </h3>
          <ul className="text-left text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">1.</span>
              Hubungi kami melalui telepon atau email
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">2.</span>
              Tim akan memandu Anda mengisi form pendaftaran
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">3.</span>
              Jadwal konsultasi akan diatur sesuai ketersediaan
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Konsultasi;
