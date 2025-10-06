import { MessageSquare, BookOpen, Activity, Users, Clock, Award, CheckCircle } from 'lucide-react';

const LayananPage = () => {
  const layanan = [
    {
      icon: <MessageSquare size={48} />,
      title: "Konsultasi Psikologi",
      subtitle: "Layanan konsultasi profesional dengan psikolog anak berpengalaman",
      description: "Konsultasi psikologi anak adalah layanan profesional yang memberikan dukungan komprehensif untuk mengatasi berbagai tantangan tumbuh kembang anak. Tim psikolog berpengalaman kami siap membantu mengidentifikasi dan menangani masalah psikologis yang mungkin dialami anak Anda.",
      benefits: [
        "Konsultasi dengan psikolog anak berlisensi dan berpengalaman",
        "Asesmen psikologis yang mendalam dan akurat", 
        "Terapi individual yang disesuaikan dengan kebutuhan anak",
        "Konseling keluarga untuk menciptakan lingkungan yang mendukung",
        "Follow-up berkala untuk memantau perkembangan",
        "Laporan komprehensif dan rekomendasi tindak lanjut"
      ],
      bgColor: "bg-rose-50",
      accentColor: "bg-rose-500",
      textColor: "text-rose-500",
      imagePath: "/image/layanan-1.webp"
    },
    {
      icon: <BookOpen size={48} />,
      title: "Terapi Belajar",
      subtitle: "Program khusus untuk mengatasi kesulitan belajar dan meningkatkan prestasi akademik",
      description: "Program terapi belajar dirancang khusus untuk anak-anak yang mengalami kesulitan dalam proses pembelajaran. Dengan pendekatan yang holistik dan metode yang terbukti efektif, kami membantu anak mengatasi hambatan belajar dan mengoptimalkan potensi akademiknya.",
      benefits: [
        "Asesmen kemampuan belajar yang komprehensif",
        "Program pembelajaran individual sesuai gaya belajar anak",
        "Terapi untuk kesulitan membaca, menulis, dan berhitung",
        "Latihan konsentrasi dan fokus",
        "Strategi belajar yang efektif dan menyenangkan",
        "Koordinasi dengan sekolah untuk program yang terintegrasi"
      ],
      bgColor: "bg-blue-50",
      accentColor: "bg-blue-500",
      textColor: "text-blue-500",
      imagePath: "/image/layanan-2.webp"
    },
    {
      icon: <Activity size={48} />,
      title: "Stimulasi Tumbuh Kembang",
      subtitle: "Program stimulasi komprehensif untuk mengoptimalkan perkembangan anak",
      description: "Program stimulasi tumbuh kembang adalah layanan yang dirancang untuk memberikan rangsangan yang tepat sesuai tahap perkembangan anak. Program ini mencakup stimulasi motorik kasar, motorik halus, kognitif, bahasa, dan sosial emosional yang disesuaikan dengan usia dan kebutuhan individual anak.",
      benefits: [
        "Stimulasi motorik kasar untuk perkembangan fisik optimal",
        "Latihan motorik halus untuk koordinasi dan ketangkasan",
        "Stimulasi kognitif untuk mengasah kemampuan berpikir",
        "Pengembangan bahasa dan komunikasi",
        "Stimulasi sosial emosional untuk interaksi yang sehat",
        "Program bermain edukatif yang menyenangkan"
      ],
      bgColor: "bg-green-50",
      accentColor: "bg-green-500",
      textColor: "text-green-500",
      imagePath: "/image/layanan-3.webp"
    },
    {
      icon: <Users size={48} />,
      title: "Parenting Class",
      subtitle: "Kelas edukasi untuk orang tua dalam mengoptimalkan tumbuh kembang anak",
      description: "Parenting Class adalah program edukasi komprehensif yang dirancang untuk membekali orang tua dengan pengetahuan dan keterampilan yang diperlukan dalam mengasuh dan mendampingi tumbuh kembang anak. Kelas ini dipimpin oleh para ahli yang berpengalaman dalam bidang perkembangan anak.",
      benefits: [
        "Pemahaman mendalam tentang tahap perkembangan anak",
        "Teknik komunikasi efektif dengan anak",
        "Strategi mengatasi tantangan perilaku anak",
        "Tips menciptakan lingkungan yang mendukung tumbuh kembang",
        "Diskusi kelompok dan sharing pengalaman",
        "Materi praktis yang dapat langsung diterapkan"
      ],
      bgColor: "bg-amber-50",
      accentColor: "bg-amber-500",
      textColor: "text-amber-500",
      imagePath: "/image/layanan-4.webp"
    },
    {
      icon: <Clock size={48} />,
      title: "Early Detection",
      subtitle: "Pemeriksaan dan deteksi dini untuk identifikasi keterlambatan tumbuh kembang",
      description: "Layanan Early Detection adalah program pemeriksaan komprehensif untuk mendeteksi secara dini adanya keterlambatan atau gangguan dalam tumbuh kembang anak. Deteksi dini sangat penting untuk memberikan intervensi yang tepat waktu dan optimal bagi perkembangan anak.",
      benefits: [
        "Skrining perkembangan yang komprehensif",
        "Asesmen multi-domain (motorik, kognitif, bahasa, sosial-emosional)",
        "Identifikasi dini masalah tumbuh kembang",
        "Rekomendasi intervensi yang tepat",
        "Monitoring berkala perkembangan anak",
        "Konsultasi dengan tim multidisiplin"
      ],
      bgColor: "bg-purple-50",
      accentColor: "bg-purple-500",
      textColor: "text-purple-500",
      imagePath: "/image/layanan-5.webp"
    },
    {
      icon: <Award size={48} />,
      title: "Terapi Perilaku",
      subtitle: "Program terapi untuk menangani gangguan perilaku dan emosi pada anak",
      description: "Terapi perilaku adalah program intervensi yang dirancang untuk membantu anak mengatasi masalah perilaku dan emosi. Dengan menggunakan pendekatan berbasis evidence dan teknik-teknik terapeutik yang terbukti efektif, program ini membantu anak mengembangkan perilaku yang lebih adaptif dan sehat.",
      benefits: [
        "Terapi behavior modification yang terstruktur",
        "Teknik manajemen emosi untuk anak",
        "Program pengembangan keterampilan sosial",
        "Intervensi untuk mengurangi perilaku bermasalah",
        "Pelatihan self-regulation dan self-control",
        "Kolaborasi dengan keluarga dan sekolah"
      ],
      bgColor: "bg-cyan-50",
      accentColor: "bg-cyan-500",
      textColor: "text-cyan-500",
      imagePath: "/image/layanan-6.webp"
    }
  ];

  return (
    <div className="bg-white pt-28">
      {/* Header Section */}
      <section className="pt-8 pb-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="font-sf inline-block px-6 py-2 text-sm tracking-wider font-medium text-amber-700 bg-amber-100 rounded-full mb-6">
            Layanan Profesional Kami
          </span>
          <h1 className="font-sf text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Layanan <span className="text-amber-500">Terpadu</span>
          </h1>
          <p className="font-sf text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Klinik Tumbuh Kembang Anak Yamet Batam Tiban menyediakan layanan komprehensif dan terpadu 
            untuk mendukung perkembangan optimal anak Anda dengan pendekatan profesional dan penuh kasih sayang.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {layanan.map((item, index) => (
            <div key={index} className={`mb-20 ${index === layanan.length - 1 ? 'mb-0' : ''}`}>
              <div className={`${item.bgColor} rounded-3xl overflow-hidden`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                    <div className={`${item.textColor} mb-4`}>
                      {item.icon}
                    </div>
                    
                    <div>
                      <h2 className="font-sf text-4xl font-bold text-gray-800 mb-3">
                        {item.title}
                      </h2>
                      <p className="text-xl text-gray-600 font-medium mb-4">
                        {item.subtitle}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Manfaat Layanan:</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {item.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <CheckCircle className={`${item.textColor} mt-1 flex-shrink-0`} size={20} />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>


                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex items-stretch`}>
                    <div className="w-full">
                      <picture>
                        <source srcSet={item.imagePath} type="image/webp" />
                        <img 
                          src={item.imagePath.replace('.webp', '.png')} 
                          alt={item.title} 
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LayananPage;