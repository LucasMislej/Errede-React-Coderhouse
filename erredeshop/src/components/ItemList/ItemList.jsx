import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'
const ItemList =({products}) => {
    return(
        <div className="ListGroup">
            {products.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList 