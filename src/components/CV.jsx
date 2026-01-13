import React from 'react';

function CV({ idioma }) {
  const textos = {
    es: {
      titulo: "Experiencia y CV",
      subtitulo: "Haga clic en el documento para descargar",
      descargar: "Descargar PDF",
      langEs: "Español",
      langEn: "Inglés"
    },
    en: {
      titulo: "Experience & Resume",
      subtitulo: "Click on the document to download",
      descargar: "Download PDF",
      langEs: "Spanish",
      langEn: "English"
    }
  };

  const t = textos[idioma] || textos.es;

  return (
    <section id="cv" className="section">
      <h2>{t.titulo}</h2>
      <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '20px' }}>
        {t.subtitulo}
      </p>

      <div className="cv-container">
     
        <a href="PabloRomoCV_ES.pdf" download="PabloRomoCV_ES.pdf" className="cv-card">
          <span className="cv-icon">📄</span>
          <span className="cv-name">{t.langEs}</span>
          <span className="cv-download-text">{t.descargar}</span>
        </a>

        <a href="PabloRomoCV_EN.pdf" download="PabloRomoCV_EN.pdf" className="cv-card">
          <span className="cv-icon">📄</span> 
          <span className="cv-name">{t.langEn}</span>
          <span className="cv-download-text">{t.descargar}</span>
        </a>
      </div>
    </section>
  );
}

export default CV;

