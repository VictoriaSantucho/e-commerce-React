import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/itemCount'


const ItemDetail = ({product}) => {

    const [toggle, setToggle] = useState(false)
    const {addProductCart} = useContext(CartContext)

    const addToCart = (count) => {
      const newProduct = {amount: count, ...product}
      addProductCart(newProduct)
      setToggle(true)
    }

    return (
    <div className='itemDetail'>
        <img src={product.thumbnail} alt={product.title} width={"200px"} />
        <div className='itemDetail-describe'>
          <p className='title'>{product.title}</p>
          <p className='description'>{product.description}</p>
          <p className='price'>{`Price: $ ${product.price}`}</p>

          {toggle ? ( 
            <>
              <Link to='/cart' className='button-goToCart'>Go to Cart</Link>
              <Link to='/' className='button-goToShop'>Continue Shopping</Link>
            </>            
            )
          :
          (<ItemCount stock = {product.stock} addToCart = {addToCart}/>)
          }

        </div>
    </div>
  )
}

export default ItemDetail
