
import {useContext} from "react"
import {Link} from "react-router-dom"
import {CartContext} from "../../context/CartContext"

const CartWidget = () => {

    const { cart, totalAmount } = useContext(CartContext)

    return (
        <Link to='/cart' id='cartwidget'>
            <img src="/images/iconCart.png"></img>
            {cart.length > 0 ? <span className="cartNumber">{totalAmount()}</span> : null}
        </Link>
    )
}

export default CartWidget