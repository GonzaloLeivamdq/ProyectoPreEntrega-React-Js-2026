import { useState } from 'react'
import FormularioProducto from '../FormularioProducto/FormularioProducto'

const IMGBB_URL = 'https://api.imgbb.com/1/upload'
const IMGBB_KEY = import.meta.env.VITE_IMGBB_API_KEY

const datosIniciales = { id: '', nombre: '', precio: '', stock: '' }

function FormularioContainer() {
  const [datos, setDatos] = useState(datosIniciales)
  const [archivo, setArchivo] = useState(null)
  const [estado, setEstado] = useState({ tipo: '', texto: '' })
  const [enviando, setEnviando] = useState(false)

  // Un solo handler para todos los inputs de texto: usa el "name" de cada input
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  const handleArchivo = (e) => {
    setArchivo(e.target.files[0] || null)
  }

  // Sube la imagen a imgbb y devuelve la URL pública
  const subirImagen = async (imagen) => {
    const formData = new FormData()
    formData.append('image', imagen)

    const respuesta = await fetch(`${IMGBB_URL}?key=${IMGBB_KEY}`, {
      method: 'POST',
      body: formData,
    })
    const resultado = await respuesta.json()

    if (!respuesta.ok || !resultado.success) {
      throw new Error('imgbb rechazó la subida de la imagen')
    }
    return resultado.data.url
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // evita que el navegador recargue la página
    const formulario = e.target

    if (!archivo) {
      setEstado({ tipo: 'error', texto: 'Seleccioná una imagen del producto.' })
      return
    }
    if (!IMGBB_KEY) {
      setEstado({ tipo: 'error', texto: 'Falta la API key de imgbb (VITE_IMGBB_API_KEY).' })
      return
    }

    try {
      setEnviando(true)
      setEstado({ tipo: '', texto: '' })

      console.log('Subiendo imagen a Imgbb...')
      const urlImagen = await subirImagen(archivo)
      console.log('Imagen subida con éxito.')
      console.log('URL:', urlImagen)

      const productoCompleto = { ...datos, urlImagen }
      console.log('Enviando los siguientes datos COMPLETOS a la API:')
      console.log(productoCompleto)

      setEstado({ tipo: 'ok', texto: 'Producto enviado. Mirá la consola para ver los datos.' })
      setDatos(datosIniciales)
      setArchivo(null)
      formulario.reset() // limpia el input de archivo
    } catch (error) {
      console.error('Error al subir la imagen:', error)
      setEstado({ tipo: 'error', texto: 'No se pudo subir la imagen. Revisá la API key e intentá de nuevo.' })
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section id="formulario" className="seccion">
      <h2 className="seccion__titulo">Cargar un producto</h2>
      <FormularioProducto
        datos={datos}
        estado={estado}
        enviando={enviando}
        onChange={handleChange}
        onArchivo={handleArchivo}
        onSubmit={handleSubmit}
      />
    </section>
  )
}

export default FormularioContainer
