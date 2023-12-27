
import './styles/styles.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
     <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path='/' forceRefresh={true} element={<ItemListContainer greeting={'Welcome to Mountain'}/>}/>
            <Route path='/categories/:category' element={<ItemListContainer greeting={'Welcome to Mountain'}/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
