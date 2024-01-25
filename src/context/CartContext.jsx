import { createContext, useState } from "react";

// Create context to share cart data between components
const CartContext = createContext()

// children is the component that is wrapped by CartProvider
const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addProductCart = (product) => {
        //check if product is already in cart. If so, update amount
        if (isInCart(product.id)) {
            const productInCart = cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        amount: item.amount + product.amount
                    }
                } else {
                    return item
                }
            })
            setCart(productInCart)
        } else {
            setCart([...cart, product])
        }
    }

    const isInCart = (id) => {
        //some method to check if product is in cart. Returns true or false
        return cart.some(product => product.id === id)
    }

    const totalAmount = () => {
        //reduce method to calculate total amount of products in cart
        return cart.reduce((acc, product) => acc + product.amount, 0)
    }

    const deleteProductCart = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }

    const cleanCart = () => {
        setCart([])

    }

    const totalPrice = () => {
        return cart.reduce((acc, product) => acc + product.price * product.amount, 0)
    }


    return (
        <CartContext.Provider value={{ cart, addProductCart, totalAmount, deleteProductCart, cleanCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider }