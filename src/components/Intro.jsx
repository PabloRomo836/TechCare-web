import React from 'react';

function Intro({ idioma }) {
  const textos = {
    es: {
      titulo: "Sobre mí",
      p1: "Técnico informático especializado en diagnóstico, reparación y optimización de PC y notebooks. Resolución de problemas con enfoque práctico.",
      p2: "A través de <strong>TechCare</strong> brindo soporte integral y soluciones personalizadas para particulares y proyectos.",
      badges: ["🛠️ Soporte Técnico", "💻 Hardware", "🚀 Optimización"]
    },
    en: {
      titulo: "About Me",
      p1: "IT Technician specialized in diagnosis, repair, and optimization of PCs and notebooks. Problem-solving with a practical approach.",
      p2: "Through <strong>TechCare</strong> I provide comprehensive support and customized solutions for individuals and projects.",
      badges: ["🛠️ Tech Support", "💻 Hardware", "🚀 Optimization"]
    }
  };

  const t = textos[idioma || 'es'];
  
  return (
    <section id="sobre-mi" className="section intro-section">
      <div className="intro-glow-1"></div>
      <div className="intro-glow-2"></div>

      <h2 className="intro-title">{t.titulo}</h2>
      
      <div className="about-container">
        <div className="about-card-wrapper">
          <div className="about-card">
            <div className="about-content">
              <p className="about-text">{t.p1}</p>
              <p className="about-text" dangerouslySetInnerHTML={{ __html: t.p2 }}></p>
              <div className="about-badges">
                {t.badges.map((badge, i) => (
                  <span key={i} className="badge">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;



