import Equipo from '../Equipo/Equipo'

const integrantes = [
  { id: 1, nombre: 'Benicio Brand', rol: 'Desarrollo Frontend', email: 'Benito@tecnoshop.com', foto: '/img/beni.jpg' },
  { id: 2, nombre: 'Kiara Massaro', rol: 'Atención al cliente', email: 'Kikin@tecnoshop.com', foto: '/img/kikin.jpg' },
  { id: 3, nombre: 'Agustina Brandes', rol: 'Logística y envíos', email: 'Agusbran@tecnoshop.com', foto: '/img/agustina.jpg' },
]

const anio = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor">
        <section className="footer__empresa">
          <h2 className="footer__titulo">TecnoShop</h2>
          <p>
            Somos una tienda de tecnología de Mar del Plata. Vendemos periféricos y
            accesorios para trabajar, estudiar y jugar, con envíos a todo el país.
          </p>
          <p>Contacto: hola@tecnoshop.com · Lunes a viernes de 9 a 18 h</p>
        </section>

        <section id="equipo" className="footer__equipo">
          <h3 className="footer__subtitulo">Nuestro equipo</h3>
          <div className="team-grid">
            {integrantes.map((persona) => (
              <Equipo
                key={persona.id}
                nombre={persona.nombre}
                rol={persona.rol}
                email={persona.email}
                foto={persona.foto}
              />
            ))}
          </div>
        </section>

        <p className="footer__copy">© {anio} TecnoShop. Pre-entrega de React.</p>
      </div>
    </footer>
  )
}

export default Footer