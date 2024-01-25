
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { CartProvider } from './context/CartContext'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/checkout'

import './styles/styles.css'


function App() {

  return (
     <BrowserRouter>
     <CartProvider>
      <NavBar/>
        <Routes>
            <Route path='/' forceRefresh={true} element={<ItemListContainer greeting={'Welcome to Mountain'}/>}/>
            <Route path='/categories/:category' element={<ItemListContainer greeting={'Welcome to Mountain'}/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
            
        </Routes>
        </CartProvider>
      </BrowserRouter>
    
  )
}

export default App
