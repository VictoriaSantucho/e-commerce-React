import {useState, useEffect } from 'react'
import getProducts from '../Utils/data'
import ItemList from './ItemList'


const ItemChildContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [erro, setErrors] = useState([])

  useEffect ( () => {
  getProducts
  .then( (response) => 
    setProducts(response))
  .catch((error) => console.log(error))
  .finally(() =>
    console.log('Fin')
  ) 
  }, [])
  


  return (
    <div className='itemListContainer'>
        <h1>{greeting}</h1>
        <ItemList products={products}/>    
    </div>
  )
}

export default ItemChildContainer