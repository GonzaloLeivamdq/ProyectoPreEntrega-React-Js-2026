function FormularioProducto({ datos, estado, enviando, onChange, onArchivo, onSubmit }) {
  return (
    <form className="formulario" onSubmit={onSubmit}>
      <label>
        ID
        <input type="text" name="id" value={datos.id} onChange={onChange} required />
      </label>
      <label>
        Nombre
        <input type="text" name="nombre" value={datos.nombre} onChange={onChange} required />
      </label>
      <label>
        Precio
        <input type="number" name="precio" min="0" value={datos.precio} onChange={onChange} required />
      </label>
      <label>
        Stock
        <input type="number" name="stock" min="0" value={datos.stock} onChange={onChange} required />
      </label>
      <label className="formulario__completo">
        Imagen
        <input type="file" name="imagen" accept="image/*" onChange={onArchivo} required />
      </label>

      <button type="submit" className="boton formulario__completo" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Guardar producto'}
      </button>

      {estado.texto && (
        <p className={`mensaje mensaje--${estado.tipo} formulario__completo`} role="status">
          {estado.texto}
        </p>
      )}
    </form>
  )
}

export default FormularioProducto
