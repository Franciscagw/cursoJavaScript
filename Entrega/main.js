const productos = [
    {id:0, nombre: "Medium Dior Ammi Bag",precio: 3500, imagenUrl:"../media/bags/ammi-adel.avif"},
    {id:1, nombre: "Saddle Bag with Strap",precio: 5800, imagenUrl:"../media/bags/bandolera-saddle.jpg.avif"},
    {id:2, nombre: "Large Dior Book Tote",precio: 3000, imagenUrl: "../media/bags/book-tote-grande-adelante.avif"},
    {id:3, nombre: "CD Lounge Bag Blue Dior Oblique Jacquard",precio: 2600, imagenUrl: "../media/bags/cd-lounge-adel.avif"},
    {id:4, nombre: "Mini Lady Dior Bag",precio: 5100, imagenUrl: "../media/bags/mini-lady-dior-adelant.avif"},
    {id:5, nombre: "Small 30 Montaige Bag",precio: 2900, imagenUrl: "../media/bags/montaige-adel.avif"},
    {id:6, nombre: "Small Dior Key Bag",precio: 4200, imagenUrl: "../media/bags/key-adel.avif"},
];

const bagsContainer = document.getElementById("bagsContainer")
const carrito = [];
const carritoContainer = document.getElementById ("carrito");

const recorridoProductos = () =>{
    productos.forEach (producto =>{
        const card = document.createElement ("div");

        card.innerHTML = `
        <img class="move" width="100" id=${producto.id} src=${producto.imagenUrl} alt=${producto.nombre}>
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
    } )
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

