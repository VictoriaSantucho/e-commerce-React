import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import useLoading from '../../hooks/useLoading'
import { collection, where, query, getDocs } from 'firebase/firestore'
import db from '../../db/db'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const { category } = useParams()
  const { loading, showLoading, hideLoading, screenLoading } = useLoading()

  useEffect(() => {
    showLoading()
    let consulta
    const productsRef = collection(db, 'products')

    if (category) {
      consulta = query(productsRef, where('category', '==', category))

    } else {
      consulta = productsRef
    }

    getDocs(consulta)
      .then((response) => {
        let productdb = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setProducts(productdb)
      })

      .catch((error) => console.log(error))

      .finally(() => hideLoading())
  }, [category])

  return (
    <>
      {loading ? (
        screenLoading
      ) : (
        <div className='itemListContainer'>
          <h1>{greeting}</h1>
          <ItemList products={products} />
        </div>
      )}
    </>
  )
}

export default ItemListContainer