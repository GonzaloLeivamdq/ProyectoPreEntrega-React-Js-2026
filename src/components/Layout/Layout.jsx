import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Layout = estructura que se repite en toda la app: Header + nav + contenido + Footer.
// "children" es todo lo que se escribe entre <Layout> y </Layout> en App.jsx
function Layout({ children }) {
  return (
    <div className="layout">
      <Header />

      <nav className="nav" aria-label="Navegación principal">
        <ul className="contenedor nav__lista">
          <li><a href="#productos">Productos</a></li>
          <li><a href="#formulario">Cargar producto</a></li>
          <li><a href="#equipo">Equipo</a></li>
        </ul>
      </nav>

      <main className="contenedor main">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
