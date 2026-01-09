import { useState } from "react"
import "./Header.css"

import logoLeft from "../assets/logos/logo-izquierdo.jpg"
import logoRight from "../assets/logos/logo-derecho.jpg"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">

      {}
      <div className="header-container">

        <div className="header-side">
          <img src={logoLeft} alt="Logo izquierdo" className="header-logo" />
        </div>

        <div className="header-center">
          <h1>TechCare</h1>
          <p className="subtitle">
            Soporte técnico informático · Mantenimiento y optimización
          </p>
        </div>

        <div className="header-side">
          <img src={logoRight} alt="Logo derecho" className="header-logo" />
        </div>

      </div>

      {}
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {}
      <nav className={`nav ${open ? "open" : ""}`}>
        <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
        <a href="#habilidades" onClick={() => setOpen(false)}>Habilidades</a>
        <a href="#cv" onClick={() => setOpen(false)}>CV</a>
        <a href="#portfolio" onClick={() => setOpen(false)}>Portafolio</a>
      </nav>

    </header>
  )
}

export default Header











