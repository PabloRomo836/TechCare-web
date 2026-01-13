import React, { useState } from 'react';
import Header from "./components/Header";
import Intro from "./components/Intro";
import TechCare from "./components/TechCare";
import Skills from "./components/Skills";
import CV from "./components/CV";
import Portafolio from "./components/Portafolio";
import Galeria from "./components/Galeria"; // 
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  const [idioma, setIdioma] = useState('es'); 

  const toggleLanguage = () => {
    setIdioma(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <>
      <Header idioma={idioma} toggleLanguage={toggleLanguage} />
      <main>
        <Intro idioma={idioma} />
        <TechCare idioma={idioma} />
        <Skills idioma={idioma} />
        <Portafolio idioma={idioma} />
        <Galeria idioma={idioma} /> {/* <-- La agregamos aquí */}
        <CV idioma={idioma} />
        <Contact idioma={idioma} />
      </main>
      <Footer idioma={idioma} />
      <WhatsAppFloat />
    </>
  );
}

export default App;
















