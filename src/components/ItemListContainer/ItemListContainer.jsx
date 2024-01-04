import {useState, useEffect } from 'react'
import getProducts from '../../utils'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import useLoading from '../../hooks/useLoading'

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [error, setErrors] = useState([])
  const {category} = useParams()
  
  const {loading, showLoading, hideLoading, screenLoading} = useLoading()

  useEffect ( () => {

    showLoading()

    getProducts
    .then( (response) => {

      if(category){
        const filteredProducts = response.filter(product => product.category === category)
        setProducts(filteredProducts)

      }else {
        setProducts(response)
      }
      
    })
    .catch((error) => console.log(error)
    )
    .finally(() =>
      hideLoading()
    ) 
  }, [category])
  


  return (
    <>
      {loading ? 
        {screenLoading}
        : 
        <div className='itemListContainer'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>    
        </div>
      }
    </>
  )
}

export default ItemListContainer