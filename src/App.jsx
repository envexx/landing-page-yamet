import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Layanan from "./components/Layanan"
import Keunggulan from "./components/Keunggulan"
import Testimonials from "./components/Testimoni"
import GaleriKegiatan from "./components/GaleriKegiatan"
import FAQSection from "./components/Faq"
import Footer from "./components/Footer"
import Konsultasi from "./components/Konsultasi"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/konsultasi" element={<Konsultasi />} />
      </Routes>
    </Router>
  )
}

export default App
