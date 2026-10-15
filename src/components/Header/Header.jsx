import logo from '../../assets/tecnoshoplogo.jpg'

function Header() {
  return (
    <header className="header">
      <div className="contenedor header__interior">
        <h1 className="header__titulo">
          <img className="header__logo" src={logo} alt="TecnoShop" />
        </h1>
        <p className="header__lema">Tecnología para tu escritorio</p>
      </div>
    </header>
  )
}

export default Header