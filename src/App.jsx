import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Layanan from "./components/Layanan";
import Keunggulan from "./components/Keunggulan";
import Testimoni from "./components/Testimoni";
import GaleriKegiatan from "./components/GaleriKegiatan";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";
import BlogPage from "./components/BlogPage";
import BlogDetailPage from "./components/BlogDetailPage";
import LayananPage from "./components/LayananPage";
import GaleriPage from "./components/GaleriPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Layanan />
              <Keunggulan />
              <Testimoni />
              <GaleriKegiatan />
              <FAQSection />
            </>
          } />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/galeri" element={<GaleriPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
