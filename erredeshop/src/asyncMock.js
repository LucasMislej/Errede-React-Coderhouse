const imgAlambre = "src/imagenes/alambreNegro.webp";
const clavos = "src/imagenes/clavos.jpg";
const imgConcertina = "src/imagenes/concertina.jpg"
const imgPinches = "src/imagenes/pinches.jpg"


let products = [
    {
        id: '1',
        nombre: 'Concertina',
        tipo: 'Simple',
        variedad: '10m',
        precio: 9000,
        cantidad: '0',
        stock: 25 ,
        img: imgConcertina
    },
    {
        id: '2',
        nombre: 'Concertina',
        tipo: 'Cruzada',
        variedad: '10m',
        precio: 12000,
        cantidad: '0',
        stock: 25 ,
        img: imgConcertina,
    },

    {
        id: '3',
        nombre: 'Pinches',
        tipo: 'simples',
        variedad: '10m',
        precio: 12000,
        cantidad: '0',
        stock: 25 ,
        img: imgPinches ,
    },
    {
        id: '4',
        nombre: 'Pinches',
        tipo: 'espiralados',
        variedad: '10m',
        precio: 12000,
        cantidad: '0',
        stock: 25 ,
        img: imgPinches ,
    },
    {
        id: '5',
        nombre: 'Clavos',
        tipo: 'sin cabeza',
        variedad: '1/4 pulgada',
        precio: 12000,
        cantidad: '0',
        stock: 25 ,
        img: clavos ,
    },
    {
        id: '6',
        nombre: 'Alambre',
        tipo: 'Negro',
        variedad: '10m',
        precio: 12000,
        cantidad: '0',
        stock: 25 ,
        img: imgAlambre ,
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (id) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(id ? products.find(prod=>prod.id===id):products)
        },500)
    })
}


  
  