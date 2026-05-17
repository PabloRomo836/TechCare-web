import React from 'react';

function Contact({ idioma }) {
  const textos = {
    es: {
      titulo: "Contacto",
      zonaLabel: "Zona de cobertura",
      zonaValue: "B° Ampliación Res. América, Córdoba.",
      horarioLabel: "Horario de Atención",
      horarioValue: "Lun a Sáb: 10:00 a 18:00 hs"
    },
    en: {
      titulo: "Contact",
      zonaLabel: "Service Area",
      zonaValue: "B° Ampliación Res. América, Córdoba.",
      horarioLabel: "Business Hours",
      horarioValue: "Mon to Sat: 10:00 AM to 6:00 PM"
    }
  };

  const t = textos[idioma || 'es'];

  return (
    <section id="contacto" className="section">
      <h2>{t.titulo}</h2>
      <div className="contact-container">
        
        <div className="contact-card">
          <span>📍</span>
          <div className="contact-text-group">
            <span className="contact-label"> {t.zonaLabel} </span>
            <span className="contact-value"> {t.zonaValue} </span>
          </div>
        </div>

        
        <div className="contact-card">
          <span>🕒</span>
          <div className="contact-text-group">
            <span className="contact-label"> {t.horarioLabel} </span>
            <span className="contact-value"> {t.horarioValue} </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
