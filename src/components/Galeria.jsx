import React from 'react';

function Galeria({ idioma }) {
  const t = idioma === 'en' 
    ? { titulo: "Recent Work" } 
    : { titulo: "Trabajos Realizados" };

  const items = [
    { type: 'video', url: '/soporte-tecnico-cordoba.mp4' },
    { type: 'video', url: '/reparacion-notebooks-expert.mp4' }, 
    { type: 'image', url: '/reparacion-placa-madre.jpeg' },
    { type: 'image', url: '/limpieza-hardware-profesional.jpeg' },
    { type: 'image', url: '/mantenimiento-fuente-pc.jpeg' },
    { type: 'image', url: '/herramientas-de-trabajo.jpeg' },
    { type: 'image', url: '/Combo-Actualización-pc.jpeg' },
    { type: 'image', url: '/Cartel-TechCare.jpeg' }, 
    { type: 'image', url: '/Armado-de-pc.jpg' },
  ];

  return (
    <section id="galeria" className="section">
      <h2>{t.titulo}</h2>
      <div className="galeria-grid">
        {items.map((item, i) => (
          <div key={i} className="galeria-item">
            {item.type === 'image' ? (
              <img src={item.url} alt="Servicio Técnico TechCare" loading="lazy" />
            ) : (
              <video 
                src={item.url} 
                controls 
                preload="metadata"
                onMouseOver={e => e.target.play()}
                onMouseOut={e => e.target.pause()}
              />
            )}
          </div>
        ))}
      </div>
     
    </section>
  );
}

export default Galeria;

