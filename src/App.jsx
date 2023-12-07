
import './styles/styles.css'
import ItemChildContainer from './components/ItemChildContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <div id='app'>
        <NavBar/>
        <ItemChildContainer greeting={'Welcome to Mountain'}/>
      </div>
    </>
  )
}

export default App
