import { Link } from "react-router-dom"

const Item = ({product}) => {

    const handleDetailClick = () => {

    }

    return (
        <>
        <article className="card">
              <figure className="product-img">
                  <img src={product.thumbnail} alt={product.title}/>
              </figure>
              <h3 className="product-title">
                  {product.title}
              </h3>
              <h4 className="product-price">
                  $ {product.price}
              </h4>
              <Link to={`/detail/${product.id}`} className="link-detail">Details</Link>
        </article>
        </>
    )
} 

export default Item
