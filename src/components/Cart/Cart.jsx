import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import {CartContext} from '../../context/CartContext'


function Cart() {
    const { cart, cleanCart, deleteProductCart, totalPrice, totalAmount } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className='cart-empty'>
                <h2>Your Mountain Cart is empty.</h2>
                <Link to='/' className='button-empty'>Continue shopping</Link>
            </div>
        );
    }

    return (
        <div className='cart'>
            <ul className='cart-list'>
                {cart.map((product) => {
                    return (
                        <li className='product-list' key={product.id}>
                            <img className='img-list' src={product.thumbnail} alt={product.title} width={"100px"} />
                            <div className='text-content'>
                                <p className='text-list title'>{product.title}</p>
                                <p className='text-list price'>{`$ ${product.price}`}</p>
                                <p className='text-list'>{`Qty: ${product.amount}`}</p>
                            </div>
                            <FaTrashAlt
                                className="iconDelete" onClick={() => deleteProductCart(product.id)} size={25}
                            />
                        </li>
                    );
                })}
            </ul>
            <div className='cart-options'>


                <h3>{`Subtotal (${totalAmount()} items):`} <span className='total-price'>${totalPrice()}</span></h3>

                <Link className='button-continue' to='/checkout'>
                    <p>Proceed to Checkout</p>
                </Link>
                <button className="button-delete" onClick={() => cleanCart()}>
                    <p>Empty Cart</p>
                    <FaTrashAlt size={25} /></button>
            </div>
        </div>
    );
}

export default Cart;

