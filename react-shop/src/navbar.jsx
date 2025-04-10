import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <div id="navbar">
            <div id="left">
                <Link to={'/'}s>
                    <h1 id="logo">React Shop</h1>
                </Link>
            </div>
            <div id="center">
                <Link to={'/'}>Home</Link><hr />
                <Link to={'/products'}>Products</Link><hr />
                <Link to={'/about'}>About</Link>
            </div>
            <div id="right">
                <Link to={'/login'}>
                    <button className="registration">Login</button>
                </Link>
                <Link to={'/sign-up'}>
                    <button className="registration">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar