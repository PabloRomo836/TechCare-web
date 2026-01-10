function Portfolio() {
  return (
    <>
      <section id="portafolio" className="section">
        <h2>Portafolio</h2>

        <p>
          Algunos trabajos realizados de forma independiente, enfocados en la
          resolución de problemas reales y mejora del rendimiento de equipos.
        </p>

        <div>
          <h3>Optimización de PC de escritorio</h3>
          <p>
            Diagnóstico de bajo rendimiento, limpieza de sistema, eliminación de
            software innecesario y optimización general. Mejora notable en tiempos
            de arranque y respuesta del sistema.
          </p>
        </div>

        <div>
          <h3>Instalación y configuración de Windows</h3>
          <p>
            Instalación limpia del sistema operativo, configuración de drivers,
            actualizaciones, software esencial y ajustes de seguridad.
          </p>
        </div>

        <div>
          <h3>Clonado y migración a SSD</h3>
          <p>
            Migración completa de sistema desde disco mecánico a SSD, conservando
            datos y configuraciones del usuario, con mejora significativa del
            rendimiento.
          </p>
        </div>

        <div>
          <h3>Asistencia remota y soporte técnico</h3>
          <p>
            Resolución de problemas a distancia mediante herramientas de acceso
            remoto, reduciendo tiempos de espera y evitando traslados innecesarios.
          </p>
        </div>
      </section>

      {}
      <section id="cierre" className="footer-dark">
        <div className="footer-container">

          {}
          <div className="footer-item left">
            <a
              href="https://www.facebook.com/profile.php?id=61572660783487"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link facebook"
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
              </svg>
              Facebook
            </a>
          </div>

          {}
          <div className="footer-item center">
            <div className="footer-logo">C</div>
            <p className="footer-title">TechCare</p>
            <p className="footer-subtitle">Soporte Informático</p>
          </div>

          {}
          <div className="footer-item right">
            <a
              href="https://www.instagram.com/techcare_cba/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link instagram"
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
              </svg>
              Instagram
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default Portfolio

 


