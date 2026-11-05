import React from 'react';

function Portafolio({ idioma }) {
  const contenido = {
    es: {
      titulo: "Portafolio",
      btnText: "Consultar servicio →",
      wsMsg: "Hola! Me interesa el servicio de: ",
      proyectos: [
        { title: "Optimización de PC", desc: "Diagnóstico de bajo rendimiento y limpieza general del sistema.", status:  "Popular" },
        { title: "Windows & Configuración", desc: "Instalación limpia, drivers y ajustes de seguridad esenciales.", status:  "frecuencia" },
        { title: "Clonado a SSD", desc: "Migración completa de sistema y archivos sin pérdida de datos.", status:  "Recomendado" },
        { title: "Soporte Remoto", desc: "Resolución de problemas de software mediante acceso seguro.", status:  "Immediato" },
        { title: "Rescate de Datos", desc: "Recuperación de archivos críticos en unidades dañadas.", status:  "Critico" },
        { title: "Seguridad de Red", desc: "Configuración optimizada de Routers y seguridad Wi-Fi.", status:  "Hogar" }
      ]
    },
    en: {
      titulo: "Portfolio",
      btnText: "Inquire about service →",
      wsMsg: "Hello! I am interested in: ",
      proyectos: [
        { title: "PC Optimization", desc: "Performance diagnosis and general system cleaning.", status: "Popular" },
        { title: "Windows & Setup", desc: "Clean install, drivers, and essential security settings.", status: "Frequent" },
        { title: "SSD Cloning", desc: "Full migration of system and files without data loss.", status: "Recommended" },
        { title: "Remote Support", desc: "Software troubleshooting via secure remote access.", status: "Immediate" },
        { title: "Data Recovery", desc: "Critical file recovery from damaged drives.", status: "Critical" },
        { title: "Network Security", desc: "Optimized router configuration and Wi-Fi security.", status: "Home" }
      ]
    }
  };

  const t = contenido[idioma] || contenido.es;

  return (
    <section id="portafolio" className="section">
      <h2>{t.titulo}</h2>
      <div className="portfolio-grid">
        {t.proyectos.map((p, i) => (
          <div key={i} className="portfolio-card">
            <span className="portfolio-badge">{p.status}</span>
            <div className="portfolio-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
            <a 
              href={`https://wa.me/5493517527974?text=${t.wsMsg}${p.title}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              {t.btnText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portafolio;


