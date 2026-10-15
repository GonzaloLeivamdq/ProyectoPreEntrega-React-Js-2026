import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({ titulo }) {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  // useEffect con [] se ejecuta una sola vez, cuando el componente aparece en pantalla.
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}productos.json`)
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('No se pudo cargar productos.json')
        return respuesta.json()
      })
      .then((datos) => setProductos(datos))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  return (
    <section id="productos" className="seccion">
      <h2 className="seccion__titulo">{titulo}</h2>

      {cargando && <p>Cargando productos...</p>}
      {error && <p className="mensaje mensaje--error">{error}</p>}

      <ItemList productos={productos} />
    </section>
  )
}

export default ItemListContainer
