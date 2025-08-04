import Header from "./components/Header"
import Hero from "./components/Hero"
import Layanan from "./components/Layanan"
import Keunggulan from "./components/Keunggulan"
import Testimonials from "./components/Testimoni"
import GaleriKegiatan from "./components/GaleriKegiatan"
import FAQSection from "./components/Faq"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="layanan">
        <Layanan />
      </section>
      <section id="keunggulan">
        <Keunggulan />
      </section>
      <section id="galeri">
        <GaleriKegiatan />
      </section>
      <section id="testimoni">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="about">
        <Footer />
      </section>
    </>
  )
}

export default App
