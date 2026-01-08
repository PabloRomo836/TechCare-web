import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-top">
        <h1>TechCare</h1>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      <p className="subtitle">
        Soporte técnico informático · Mantenimiento y optimización
      </p>

      <nav className={`nav ${open ? "open" : ""}`}>
        <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#techcare" onClick={() => setOpen(false)}>Servicios</a>
        <a href="#habilidades" onClick={() => setOpen(false)}>Habilidades</a>
        <a href="#cv" onClick={() => setOpen(false)}>CV</a>
        <a href="#portfolio" onClick={() => setOpen(false)}>Portafolio</a>
      </nav>
    </header>
  )
}

export default Header









