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
  
  const flyerPath = `${import.meta.env.BASE_URL}WhatsApp Image 2026-05-12 at 11.54.47.jpeg`;
  
  return (
    <section id="sobre-mi" className="section">
      <h2>{t.titulo}</h2>
      <div className="about-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
        
        <div className="about-card" style={{ flex: '1 1 450px', margin: '0' }}>
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

        
        <div className="about-flyer" style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src={flyerPath} 
            alt="TechCare Servicio Técnico a Domicilio" 
            className="about-flyer-img"
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: '15px', 
              maxHeight: '450px',
              objectFit: 'contain'
            }} 
          />
        </div>

      </div>
    </section>
  );
}

export default Intro;



