import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div id = 'navbar'>
            <div className="navbar-content">
                <div className = 'brand'>
                    <Link to='./'>
                        <img src='/images/logo.jpeg' width='40px'></img>
                    </Link>
                    <p>Mountain</p>
                </div>

                <ul className="navbar-items">
                    <Link to='/categories/fragrances'>Fragrances</Link>
                    <Link to='/categories/skincare'>Skincare</Link>
                    <Link to='/categories/laptops'>Laptops</Link>
                </ul>
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar