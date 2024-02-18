const $productos =document.querySelector (".productos");
const arrProd =[
    {nombre:"Sorrentinos", 
    imagen:"../assets/Imagen 1.png",
    id:1,
    precio: 3000,
},
    {nombre:"fideos",
    imagen:"../assets/Imagen 3.png",
    id:2,
    precio:2500},
    {
        nombre:"ravioles al verdeo",
        imagen:"../assets/Imagen 5.png",
        id:3,
        precio:3500,
    },
    {
        nombre:"fideos al Tuco",
        imagen:"../assets/Imagen 6.png",
        id:4,
        precio:2700,
    }
]
console.log(arrProd)
const createCards =(arr)=>{
    return arr.map(prod=>{
        return`
        <div class="plantilla" id="${prod.id}">
        <p class="descripcion">${prod.nombre}</p>            
        <img src="${prod.imagen}">
        <div class="piePagina">
            <b class="valor">${prod.precio}</b>
            <button class="comprar">Comprar</button>
            </div>
            
            </div>
        `     

    })

}
console.log(createCards(arrProd));
const renderCards =()=>{
    $productos.innerHTML = (createCards(arrProd)).join(``);
}
const init =()=>{
    renderCards()

};
init();