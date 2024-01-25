import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {

    const [stickyClass, setStickyClass] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar)

        return () => window.removeEventListener('scroll', stickNavbar)
    }, [])

    const stickNavbar = () => {
        if(window != undefined) {
            let heightWindow = window.scrollY;
            heightWindow > 130 ? setStickyClass('sticky-nav') : setStickyClass('')
        }
    }

    return (
        <div className = {`navbar-${stickyClass}`}>
            <div className= {`navbar-content-${stickyClass}`}>
                <div className = 'brand'>
                    <Link to='./'>
                        <img src='/images/logo.jpeg' width='40px'></img>
                    </Link>
                    <p>Mountain</p>
                </div>
                <ul className="navbar-items">
                    <Link to='/categories/speakers'>Speakers</Link>
                    <Link to='/categories/smartphones'>Smartphones</Link>
                    <Link to='/categories/laptops'>Laptops</Link>
                    <Link to='/'>Home</Link>
                </ul>
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar