import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from "../../asyncMock";

const ItemDetailContainer =()=>{
    const [products, setProduct]=useState({})
    
    const {pid}=useParams()
    
    useEffect(()=>{
        getProductsById(pid)
        .then(response=>{
            setProduct(response)
        })
        .catch(error=>{
            console.error(error)
        })
    }, [])

    return(
       
            <ItemDetail product={products}/>
      
    )
}

export default ItemDetailContainer