import {useState, useEffect } from 'react'
import getProducts from '../Utils/data'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [error, setErrors] = useState([])
  const {category} = useParams()
  

  useEffect ( () => {
    getProducts
    .then( (response) => {

      if(category){
        const filteredProducts = response.filter(product => product.category === category)
        setProducts(filteredProducts)
      }else {
        setProducts(response)
      }
      
    })
    .catch((error) => console.log(error))
    .finally(() =>
      console.log('Fin')
    ) 
  }, [category])
  


  return (
    <div className='itemListContainer'>
        <h1>{greeting}</h1>
        <ItemList products={products}/>    
    </div>
  )
}

export default ItemListContainer