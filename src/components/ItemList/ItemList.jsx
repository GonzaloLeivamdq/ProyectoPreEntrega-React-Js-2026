import Item from '../Item/Item'

function ItemList({ productos }) {
  return (
    <div className="item-grid">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          stock={producto.stock}
          imagen={producto.imagen}
        />
      ))}
    </div>
  )
}

export default ItemList
