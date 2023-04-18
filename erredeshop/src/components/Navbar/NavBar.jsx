import CartWidget from "../CartWidget/CartWidget"
import { Link,  NavLink } from "react-router-dom"
import "./Navbar.css"
const NavBar = () => {
    return (
        <nav>
            <Link className="btn" to="/">Errede Shop</Link>
            <div>
                <NavLink className="btn"  to ='/categoria/concertinas'>Concertina</NavLink>
                <NavLink className="btn"  to='/categoria/alambres'>Alambres</NavLink>
                <NavLink className="btn"  to='/categoria/clavos'>Clavos</NavLink>
            </div>
            <Link to='/cart'>
            <CartWidget />
            </Link>
        </nav>
    )
}

export default NavBar