import { useState } from 'react'
import Contador from '../Contador/Contador'

// Item = una tarjeta de producto. Recibe los datos por props desde ItemList.
function Item({ nombre, precio, stock, imagen }) {
  // useState guarda la cantidad elegida. Cuando cambia, React vuelve a dibujar el componente.
  const [cantidad, setCantidad] = useState(1)
  const [mensaje, setMensaje] = useState('')

  const sinStock = stock === 0

  const sumar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1)
  }

  const restar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1)
  }

  const agregar = () => {
    // El carrito real se hace en la próxima entrega; por ahora solo confirmamos en pantalla.
    setMensaje(`Agregaste ${cantidad} ${cantidad === 1 ? 'unidad' : 'unidades'}`)
  }

  return (
    <article className="item">
      <img className="item__imagen" src={imagen} alt={nombre} />
      <div className="item__cuerpo">
        <h3 className="item__nombre">{nombre}</h3>
        <p className="item__precio">${precio.toLocaleString('es-AR')}</p>
        <p className={sinStock ? 'item__stock item__stock--agotado' : 'item__stock'}>
          {sinStock ? 'Sin stock' : `Stock: ${stock} unidades`}
        </p>

        <div className="item__acciones">
          <Contador cantidad={cantidad} stock={stock} onSumar={sumar} onRestar={restar} />
          <button type="button" className="boton" onClick={agregar} disabled={sinStock}>
            Agregar
          </button>
        </div>

        {mensaje && <p className="item__mensaje" role="status">{mensaje}</p>}
      </div>
    </article>
  )
}

export default Item
