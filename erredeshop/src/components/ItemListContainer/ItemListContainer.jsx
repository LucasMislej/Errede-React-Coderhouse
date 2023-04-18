import { useEffect, useState } from "react"
import { getProducts, getProductsById } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) =>{
    const[products, setProducts] = useState([])

    const {cid} =useParams()

    useEffect(()=> {
       
     
        if (cid){
            getProducts()
            .then(resp=>setProducts(resp.filter(prod=>prod.nombre===cid)))
            .catch(err=>console.log(err))
            .finally(()=>console.log('siempre y al ultimo'))
        }else{
            getProducts()
            .then(resp=>setProducts(resp))
            .catch(err=>console.log(err))
            .finally(()=>console.log('siempre y al ultimo'))

        }
    }, [cid])
 
    return( 
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;