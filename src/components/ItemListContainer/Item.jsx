import { useState } from "react"
import { Link } from "react-router-dom"

const Item = ({ product }) => {

    const [zoom, setZoom] = useState(false)

    const handleMouseOver = () => {
        setZoom(true)
    }

    const handleMouseLeave = () => {
        setZoom(false)
    }

    const cardStyle = {
        transform: zoom ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out'
    }

    return (
        <>
            <article
                className="card"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                style={cardStyle}>

                <figure className="product-img">
                    <img src={product.thumbnail} alt={product.title} />
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
