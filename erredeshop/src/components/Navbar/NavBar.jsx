import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./Navbar.css"
const NavBar = () => {
    return (
        <nav>
            <h3>Errede Shop</h3>
            <div>
                <button>Concertina</button>
                <button>Alambres</button>
                <button>Clavos</button>
            </div>
            <Link to='/cart'>
            <CartWidget />
            </Link>
        </nav>
    )
}

export default NavBar