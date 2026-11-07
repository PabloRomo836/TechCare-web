import React from 'react';

function Galeria({ idioma }) {
  const t = idioma === 'en'
    ? { titulo: "Recent Work" }
    : { titulo: "Trabajos Realizados" };

  const repoPath = "/TechCare-web/";

  const items = [
    { type: 'video', url: 'soporte-tecnico-cordoba.mp4' },
    { type: 'video', url: 'reparacion-notebooks-expert.mp4' },
    { type: 'image', url: 'reparacion-placa-madre.jpeg' },
    { type: 'image', url: 'limpieza-hardware-profesional.jpg' },
    { type: 'image', url: 'mantenimiento-fuente-pc.jpeg' },
    { type: 'image', url: 'herramientas-de-trabajo.jpeg' },
    { type: 'image', url: 'combo-actualizacion-pc.jpeg' },
    { type: 'video', url: 'Reel TechCare PC.mp4' },
    { type: 'image', url: 'Mantenimiento PC.jpg' },
    { type: 'image', url: 'Setup Primer plano.jpeg' }
  ];

  return (
    <section id="galeria" className="section">
      <h2>{t.titulo}</h2>
      <div className="galeria-grid">
        {items.map((item, i) => (
          <div key={i} className="galeria-item">
            {item.type === 'image' ? (
              <img
                src={`${repoPath}${item.url}`}
                alt="Servicio Técnico TechCare"
                loading="lazy"
              />
            ) : (
              <video
                src={`${repoPath}${item.url}`}
                controls
                muted
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;   




