// Contador "tonto": no guarda nada, solo muestra la cantidad y avisa cuando se toca un botón.
function Contador({ cantidad, stock, onSumar, onRestar }) {
  const sinStock = stock === 0

  return (
    <div className="contador" aria-label="Cantidad">
      <button type="button" onClick={onRestar} disabled={sinStock || cantidad <= 1} aria-label="Restar una unidad">−</button>
      <span>{cantidad}</span>
      <button type="button" onClick={onSumar} disabled={sinStock || cantidad >= stock} aria-label="Sumar una unidad">+</button>
    </div>
  )
}

export default Contador
