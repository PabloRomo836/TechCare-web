import React from 'react';

function Skills({ idioma }) {
  const contenido = {
    es: {
      titulo: "Habilidades Técnicas",
      items: [
        { name: "HARDWARE", color: "#e53e3e", desc: "Diagnóstico, mantenimiento y reemplazo de componentes." },
        { name: "SOFTWARE", color: "#3182ce", desc: "Instalación, ajuste y mejora del rendimiento operativo." },
        { name: "REDES", color: "#0a1610", desc: "Direccionamiento IP, cableado, topologías y Wireshark." },
        { name: "VIRTUALIZACIÓN", color: "#805ad5", desc: "Configuración de entornos en VirtualBox y VMware." },
        { name: "AUTOMATIZACIÓN", color: "#d69e2e", desc: "Scripts en PowerShell, CMD y uso de Windows Terminal." },
        { name: "HERRAMIENTAS", color: "#4a5568", desc: "CrystalDiskInfo, Rufus, Ventoy, Git/GitHub y VSCode." },
        { name: "NUBE", color: "#00b0ff", desc: "Gestión de almacenamiento en Google Drive y Cloud." },
        { name: "OFIMÁTICA", color: "#2b6cb0", desc: "Dominio avanzado de Paquete Office y LibreOffice." }
      ]
    },
    en: {
      titulo: "Technical Skills",
      items: [
        { name: "HARDWARE", color: "#e53e3e", desc: "Diagnosis, maintenance, and replacement of components." },
        { name: "SOFTWARE", color: "#3182ce", desc: "Installation, adjustment, and improvement of operating performance." },
        { name: "NETWORKING", color: "#0a1610", desc: "IP addressing, cabling, topologies, and Wireshark." },
        { name: "VIRTUALIZATION", color: "#805ad5", desc: "Setting up environments in VirtualBox and VMware." },
        { name: "AUTOMATION", color: "#d69e2e", desc: "Scripts in PowerShell, CMD, and use of Windows Terminal." },
        { name: "TOOLS", color: "#4a5568", desc: "CrystalDiskInfo, Rufus, Ventoy, Git/GitHub, and VSCode." },
        { name: "CLOUD", color: "#00b0ff", desc: "Storage management in Google Drive and Cloud." },
        { name: "OFFICE SUITE", color: "#2b6cb0", desc: "Advanced proficiency in Microsoft Office and LibreOffice." }
      ]
    }
  };

  
  const t = contenido[idioma || 'es'];

  return (
    <section id="habilidades" className="section">
      <h2>{t.titulo}</h2>
      <div className="services-grid">
        {t.items.map((s, i) => (
          <div key={i} className="service-card">
            <h3 style={{ color: s.color, fontSize: '1rem', marginBottom: '10px' }}>
              {s.name}
            </h3>
            <p style={{ color: '#4a5568', fontSize: '0.95rem' }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;


