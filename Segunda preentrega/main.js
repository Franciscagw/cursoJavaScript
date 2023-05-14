let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido")

function nombreApellido (){
    return (`${nombre} ${apellido}`);
}

if (nombreApellido()!= "") {alert (`Bienvenido ${nombreApellido()} a nuestra tienda online de indumentaria`);}
else { alert ("Ingrese el nombre y el apellido")};



const productos = [
    { id: 1, nombre: "pantalon", precio:2000, stock: 6,},
    { id: 2, nombre: "camisa", precio:1900, stock: 2,},
    { id: 3, nombre: "zapatos", precio: 2500, stock: 3,},
    { id: 4, nombre: "remera", precio:1800, stock: 8,},
    { id: 5, nombre: "gorra", precio:1500,stock: 13,},
    { id: 6, nombre: "sueter", precio:2200,stock: 5,},
];
console.log (productos);

productos.push ({id:7, nombre: "bufanda", precio: 1350, stock: 4});
console.log (productos);

productos.forEach (products =>{
    console.log (products.nombre);
})

console.log (
    productos.sort ((a,b)=>{
        if(a.nombre>b.nombre){
            return 1;
        } else if (a.nombre<b.nombre){
           return -1; 
        }
        return 0;
    })
);





