import React from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  Aos.init({
    duration: 1000,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
