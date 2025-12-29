import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../constants/blog";
import { WHATSAPP_LINK } from "../constants/links";

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = BLOG_POSTS.find((post) => post.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-slate-600 mb-6">Maaf, artikel yang Anda cari tidak ditemukan.</p>
        <button
          type="button"
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-white font-semibold hover:bg-amber-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Blog
        </button>
      </div>
    );
  }

  return (
    <article className="bg-white pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </button>

        <header className="mt-6">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700 uppercase tracking-wide">
            {article.category}
          </span>
          <h1 className="font-sf mt-4 text-4xl font-bold text-slate-900">{article.title}</h1>
          <p className="mt-3 text-slate-600 text-lg">{article.summary}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-3xl">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full object-cover"
          />
        </div>

        <section className="mt-8 rounded-3xl bg-amber-50 p-6">
          <h2 className="text-xl font-semibold text-amber-700">Ringkasan Utama</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {article.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          {article.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl bg-slate-900 p-8 text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold">Butuh Saran Personal dari Terapis Yamet?</h2>
          <p className="mt-3 text-white/80">{article.ctaText}</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
                e.preventDefault();
                window.gtag_report_conversion(WHATSAPP_LINK);
              }
            }}
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-amber-500 px-7 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-amber-600"
          >
            Konsultasi WhatsApp
            <ArrowRight className="h-5 w-5" />
          </a>
        </section>
      </div>
    </article>
  );
};

export default BlogDetailPage;
