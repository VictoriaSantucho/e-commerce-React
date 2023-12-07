import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div id = 'navbar'>
            <div className="navbar-content">
                <div className = 'brand'>
                    <a href=''><img src='/images/logo.jpeg' width='40px'></img></a>
                    <p>Montagne</p>
                </div>

                <ul className="navbar-items">
                    <li><a href='#'>Camping</a></li>
                    <li><a href='#'>Fishing</a></li>
                    <li><a href='#'>Outdoor Clothing</a></li>
                </ul>
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar