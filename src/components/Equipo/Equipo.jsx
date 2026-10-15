// Tarjeta reutilizable de un integrante del equipo: recibe los datos por props
function Equipo({ nombre, rol, email, foto }) {
  const iniciales = nombre
    .split(' ')
    .map((palabra) => palabra[0])
    .join('')

  return (
    <article className="team-card">
      {foto ? (
        <img className="team-card__foto" src={foto} alt={`Foto de ${nombre}`} />
      ) : (
        <div className="team-card__avatar" aria-hidden="true">{iniciales}</div>
      )}
      <h4 className="team-card__nombre">{nombre}</h4>
      <p className="team-card__rol">{rol}</p>
      <a className="team-card__email" href={`mailto:${email}`}>{email}</a>
    </article>
  )
}

export default Equipo
