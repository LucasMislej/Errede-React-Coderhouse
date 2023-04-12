const products = [
    {
        id: '1',
        nombre: 'Concertina',
        tipo: 'Simple',
        variedad: '10m',
        precio: 9000,
        cantidad: '0',
        stock: 25 ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4D0A22e4K31PxkqqEjTWjCGMDk3mP-xPHg&usqp=CAU"
    },
    {
        id: '2',
        nombre: 'Concertina',
        tipo: 'Cruzada',
        variedad: '10m',
        precio: 12000,
        cantidad: '0',
        stock: 25 ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4D0A22e4K31PxkqqEjTWjCGMDk3mP-xPHg&usqp=CAU"
    },

    {
        id: '3',
        nombre: 'Concertina',
        tipo: 'Cruzada',
        variedad: '10m',
        precio: 12000,
        cantidad: '0',
        stock: 25 ,
        img: ""
    },
    {
        id: '4',
        nombre: 'Concertina',
        tipo: 'Cruzada',
        variedad: '10m',
        precio: 12000,
        cantidad: '0',
        stock: 25 ,
        img: ""
    },
    {
        id: '5',
        nombre: 'Concertina',
        tipo: 'Cruzada',
        variedad: '10m',
        precio: 12000,
        cantidad: '0',
        stock: 25 ,
        img: ""
    },
    {
        id: '6',
        nombre: 'Concertina',
        tipo: 'Cruzada',
        variedad: '10m',
        precio: 12000,
        cantidad: '0',
        stock: 25 ,
        img: ""
    },
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products.find(prod=>prod.id===productId))
        },500)
    })
}
