import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Errede Shop</h3>
            <div>
                <button>Concertina</button>
                <button>Alambres</button>
                <button>Clavos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar