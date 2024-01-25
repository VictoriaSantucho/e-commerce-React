import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import db from '../../db/db'

function ItemDetailContainer() {

    const [product, setProduct] = useState({})
    const [isProduct, setIsProduct] = useState(false)
    const { id } = useParams()


    useEffect(() => {
        const productsRef = doc(db, 'products', id)
        getDoc(productsRef)
            .then((response => {
                const productsDB = { id: productsRef.id, ...response.data() }
                if (response.exists()) {
                    setIsProduct(true)
                }
                setProduct(productsDB)
            }))
            .catch((err) => console.log(err))
    }, [id])

    return (
        <div className='itemDetailContainer'>
            {isProduct ?
                <ItemDetail product={product} />
                :
                <p>Product does not exist.</p>}
        </div>
    )
}

export default ItemDetailContainer