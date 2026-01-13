import React from 'react';

function TechCare({ idioma }) {
  const contenido = {
    es: {
      titulo: "Servicios TechCare",
      servicios: [
        { title: "Optimización de PC" },
        { title: "Instalación de Windows" },
        { title: "Clonado y SSD" },
        { title: "Asistencia Remota" },
        { title: "Mantenimiento Preventivo" },
        { title: "Armado de PC a medida" }
      ]
    },
    en: {
      titulo: "TechCare Services",
      servicios: [
        { title: "PC Optimization" },
        { title: "Windows Installation" },
        { title: "Cloning & SSD" },
        { title: "Remote Support" },
        { title: "Preventive Maintenance" },
        { title: "Custom PC Building" }
      ]
    }
  };

  const t = contenido[idioma || 'es'];

  
  const iconos = [
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#270992" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" width="20" height="14" rx="2" y="3"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
        <path d="M12 7v4"></path>
        <path d="M9 10l3-3 3 3"></path>
      </svg>
    ),
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#13c6e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
        <path d="M8 21h8"></path>
        <path d="M12 17v4"></path>
        <path d="M7 8l10 0"></path>
        <path d="M7 11l6 0"></path>
      </svg>
    ),
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#eeea0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12H2"></path>
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
        <line x1="6" y1="16" x2="6.01" y2="16"></line>
        <line x1="10" y1="16" x2="10.01" y2="16"></line>
      </svg>
    ),
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f70808" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        <path d="M12 13v4"></path>
        <path d="M10 15h4"></path>
      </svg>
    ),
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d86b12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <path d="M9 1h1"></path>
        <path d="M14 1h1"></path>
        <path d="M9 23h1"></path>
        <path d="M14 23h1"></path>
        <path d="M1 9v1"></path>
        <path d="M1 14v1"></path>
        <path d="M23 9v1"></path>
        <path d="M23 14v1"></path>
      </svg>
    )
  ];

  return (
    <section id="servicios" className="section">
      <h2>{t.titulo}</h2>
      <div className="services-grid">
        {t.servicios.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon-container">
              {iconos[i]}
            </div>
            <h3>{s.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechCare;




