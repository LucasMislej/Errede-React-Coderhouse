import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
const ItemDetail =({id, name, type, variety, price, quantity, stock, img})=>{
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className='Info'>
                    Tipo: {type}
                </p>
                <p className='Info'>
                    Variedad: {variety}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(cantidad)=>console.log('Cantidad agregada',cantidad)} className='ItemCount'/>
            </footer>
        </article>
    )
}

export default ItemDetail