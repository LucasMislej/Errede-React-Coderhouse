import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

const ItemDetail =({id, name, tipo, variedad, precio, stock, img})=>{
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
            <p className="Info">
                    Tipo: {tipo}            
                </p> 
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Variedad: {variedad}            
                </p> 
                <p className="Info">
                    Stock disponible: {stock}            
                </p>    
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(cantidad)=>console.log('Cantidad agregada',cantidad)} className='ItemCount'/>
            </footer>
        </article>
    )
}

export default ItemDetail