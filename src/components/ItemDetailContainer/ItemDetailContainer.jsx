import React, { useEffect, useState } from 'react'
import getProducts from '../Utils/data'
import { useParams } from 'react-router-dom'
import ItemDetail  from './ItemDetail'


function ItemDetailContainer() {

    const [product, setProduct] = useState({})
    const {id} = useParams()
   

    useEffect(()=> {
        getProducts
        .then((response) => {
                console.log(response)
                const findProduct = response.find((prod) => prod.id == id)
                console.log(findProduct)
                setProduct(findProduct)
        })
        .catch((err) => console.log(err))
    }, [])
  
    return (
    <div className='itemDetailContainer'>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer