import { useState } from "react";


const ItemCount = ({ stock, addToCart }) => {

    const [count, setCount] = useState(1)

    const lessCount = () => {
        count === 1 ? setCount(1) : setCount(count - 1)
    }

    const sumCount = () => {
        count === stock ? setCount(stock) : setCount(count + 1)
    }

    return (
        <div className="itemCount">
            <div className="control-button">
                <button onClick={lessCount}>-</button>
                <p>{count}</p>
                <button onClick={sumCount}>+</button>
            </div>
            <button onClick={() => addToCart(count)} className="button-addCart">Add to Cart</button>
        </div>
    )
}

export default ItemCount