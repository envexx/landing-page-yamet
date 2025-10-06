import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../constants/blog";
import { WHATSAPP_LINK } from "../constants/links";

const BlogPage = () => {
  return (
    <div className="bg-white pt-28 pb-20 min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700 uppercase tracking-wide">
          Edukasi Orang Tua
        </span>
        <h1 className="font-sf mt-6 text-4xl md:text-5xl font-bold text-slate-900">
          Artikel Parenting dari Tim Yamet Batam Tiban
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-600">
          Kami merangkum panduan praktis yang mudah diikuti orang tua di rumah. Setiap tulisan disusun oleh terapis Yamet Batam Tiban
          berdasarkan pengalaman mendampingi anak dan keluarga.
        </p>
      </section>

      {/* Articles */}
      <section className="max-w-6xl mx-auto px-6 mt-16 grid gap-8 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="h-full rounded-3xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-t-3xl">
              <img
                src={post.heroImage}
                alt={post.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col h-full">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-700">{post.category}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-slate-900">{post.title}</h2>
              <p className="mt-3 text-slate-600">{post.summary}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {post.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-500 px-5 py-2 text-sm font-semibold text-amber-600 transition-colors duration-200 hover:bg-amber-500 hover:text-white"
                >
                  Baca selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-600"
                >
                  Konsultasi dengan Yamet
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-16 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 p-10 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold">Siap Mendapatkan Saran Personal dari Terapis?</h2>
          <p className="mt-4 text-white/80">
            Kirim pertanyaan Anda melalui WhatsApp, tim Yamet Batam Tiban akan membantu menentukan layanan yang paling sesuai untuk anak.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-amber-600"
          >
            Konsultasi WhatsApp Gratis
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
