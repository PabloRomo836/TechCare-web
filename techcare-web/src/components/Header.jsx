import { useState, useEffect } from "react"

function Header() {
  const [active, setActive] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "techcare", "habilidades", "cv", "portfolio"]
      let current = "inicio"

      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const top = section.offsetTop
          if (window.scrollY >= top - 100) {
            current = id
          }
        }
      })

      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <h1>TechCare</h1>
      <p>Soporte técnico informático · Mantenimiento y optimización</p>

      <nav>
        <a href="#inicio" className={active === "inicio" ? "active" : ""}>Inicio</a>
        <a href="#techcare" className={active === "techcare" ? "active" : ""}>Servicios</a>
        <a href="#habilidades" className={active === "habilidades" ? "active" : ""}>Habilidades</a>
        <a href="#cv" className={active === "cv" ? "active" : ""}>CV</a>
        <a href="#portfolio" className={active === "portfolio" ? "active" : ""}>Portafolio</a>
      </nav>
    </header>
  )
}

export default Header




