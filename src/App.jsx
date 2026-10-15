import Layout from './components/Layout/Layout'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import FormularioContainer from './components/FormularioContainer/FormularioContainer'

// App arma la página: el Layout envuelve todo el contenido (children)
function App() {
  return (
    <Layout>
      <ItemListContainer titulo="Nuestros productos" />
      <FormularioContainer />
    </Layout>
  )
}

export default App
