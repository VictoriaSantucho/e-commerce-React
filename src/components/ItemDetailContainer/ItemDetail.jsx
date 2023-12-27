import React from 'react'

const ItemDetail = ({product}) => {
    console.log(product)
    return (
    <div className='itemDetail'>
        <img src={product.thumbnail} alt={product.title} width={"400px"}/>
        <div className='itemDetail-describe'>
        <h2>{product.title}</h2>
        <h3>{`Price: $ ${product.price}`}</h3>
        </div>
    </div>
  )
}

export default ItemDetail
