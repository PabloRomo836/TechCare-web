import { useState } from "react"

function Header({ idioma, toggleLanguage }) {
  const [open, setOpen] = useState(false)
  
  
  const repoPath = "/TechCare-web/";

  const textos = {
    es: { 
      inicio: "Inicio", 
      servicios: "Servicios", 
      habilidades: "Habilidades", 
      cv: "CV", 
      portafolio: "Portafolio", 
      galeria: "Galería", 
      lang: "English" 
    },
    en: { 
      inicio: "Home", 
      servicios: "Services", 
      habilidades: "Skills", 
      cv: "Resume", 
      portafolio: "Portfolio", 
      galeria: "Gallery", 
      lang: "Español" 
    }
  };

  const t = textos[idioma || 'es'];

  return (
    <header className="main-header">
      <div className="header-left">
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>

      <div className="header-center">
         <h1>    TechCare </h1>
        <p className="subtitle-header"> Soporte técnico informático </p>
      </div>

      <div className="header-right">
       
        <img src={`${repoPath}logo.jpg`} alt="Logo TechCare" className="header-mini-logo" />
      </div>

      <div className={`side-panel ${open ? "open" : ""}`}>
        <button className="close-menu" onClick={() => setOpen(false)}>✕</button>
        <nav>
          <a href="#sobre-mi" onClick={() => setOpen(false)}>{t.inicio}</a>
          <a href="#servicios" onClick={() => setOpen(false)}>{t.servicios}</a>
          <a href="#habilidades" onClick={() => setOpen(false)}>{t.habilidades}</a>
          <a href="#portafolio" onClick={() => setOpen(false)}>{t.portafolio}</a>
          <a href="#galeria" onClick={() => setOpen(false)}>{t.galeria}</a> 
          <a href="#cv" onClick={() => setOpen(false)}>{t.cv}</a>
          <button className="lang-btn-nav" onClick={() => { toggleLanguage(); setOpen(false); }}>
            🌐 {t.lang}
          </button>
        </nav>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </header>
  )
}

export default Header











