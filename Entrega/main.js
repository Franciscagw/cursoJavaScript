const productos = [
    {id:0, nombre: "Medium Dior Ammi Bag",precio: 3500, imagenUrl:"../media/bags/ammi-adel.avif", imagenUrlChange: "../media/bags/ami-atras.avif"},
    {id:1, nombre: "Saddle Bag with Strap",precio: 5800, imagenUrl:"../media/bags/bandolera-saddle.jpg.avif", imagenUrlChange: "../media/bags/bandolera-saddle-atras.jpg.avif"},
    {id:2, nombre: "Large Dior Book Tote",precio: 3000, imagenUrl: "../media/bags/book-tote-grande-adelante.avif",imagenUrlChange: "../media/bags/book-tote-grande-atras.avif"},
    {id:3, nombre: "CD Lounge Bag Blue Dior Oblique Jacquard",precio: 2600, imagenUrl: "../media/bags/cd-lounge-adel.avif",imagenUrlChange: "../media/bags/cd-lounge-arri.avif"},
    {id:4, nombre: "Mini Lady Dior Bag",precio: 5100, imagenUrl: "../media/bags/mini-lady-dior-adelant.avif",imagenUrlChange: "../media/bags/mini-lady-dior-atras.avif"},
    {id:5, nombre: "Small 30 Montaige Bag",precio: 2900, imagenUrl: "../media/bags/montaige-adel.avif",imagenUrlChange: "../media/bags/montaige-atras.avif"},
    {id:6, nombre: "Small Dior Key Bag",precio: 4200, imagenUrl: "../media/bags/key-adel.avif",imagenUrlChange: "../media/bags/key-atras.avif"},
];

const bagsContainer = document.getElementById("bagsContainer")
const carrito = [];
const carritoContainer = document.getElementById ("carrito");

const recorridoProductos = () =>{
    productos.forEach (producto =>{
        const card = document.createElement ("div");

        card.innerHTML = `
        <img id="move-${producto.id}" width="100" src=${producto.imagenUrl} alt=${producto.nombre}>
        <h2>${producto.nombre}</h2>
        <h3>${producto.precio} USD</h3>
        <button id="select-${producto.id}">Select</button>
        `;

        bagsContainer.append(card);

        const selectButton = document.getElementById (`select-${producto.id}`);
        selectButton.addEventListener("click", ()=>{
            agregarAlCarrito(producto.id);
            recorridoCarrito();
        })

        //agregue las const de cambio de imagen y el evento aca
        const imgChange = document.getElementById(`move-${producto.id}`);
        imgChange.addEventListener("mouseover",()=>{

        })
    })
}
recorridoProductos ();


const recorridoCarrito = () =>{
    carritoContainer.innerHTML="";
    carrito.forEach (item =>{
        const carritoFinal = document.createElement("ul");
        carritoFinal.innerHTML = ` 
        <li>${item.nombre},cantidad: ${item.cantidad}, precio: ${item.precio}</li>
        `;
        carritoContainer.append(carritoFinal);
    })
}

const agregarAlCarrito = (productoId) =>{
    const item = productos.find((producto)=>producto.id === productoId);
    const productoEnCarrito = carrito.some((item)=> item.id===productoId);
    console.log(productoEnCarrito);

    if (productoEnCarrito){
        item.cantidad++;
        console.log(carrito);
    }else {
        item.cantidad = 1;
        carrito.push(item);
        console.log(carrito);
    }
}

//esto es lo unico del local storage que habia probado para hacer el localstorage del carrito, y deberia hacer algo con json
let localsorage = localStorage.setItem("seleccionados", recorridoCarrito);
console.log(localsorage);


// y estos son lo inicios del mouseover, por que con todo lo que probe nunca funciono
const imgChange = document.getElementById("move");//aca llamo al id de la imagen, pero no se como cambiarlo
imgChange.addEventListener("mouseover",()=>{
  //y aca deberia usar la funcion que cambie la imagen
});

