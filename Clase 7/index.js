/* CLASE 7: metodos de busca y transformacion*/
/*Higher functions: que hay orden de funciones, los let que estan dentro de una funcion solo se cumplen ahi, hay un orden superior*/

const productos = [
    { id: 1, nombre: "pantalon", precio:2000,},
    { id: 2, nombre: "camisa", precio:1900,},
    { id: 3, nombre: "zapatos", precio: 2500,},
    { id: 4, nombre: "remera", precio:1800,},
    { id: 5, nombre: "gorra", precio:1500,},
    { id: 6, nombre: "sueter", precio:2200,},
];

//metodos de busca y transformacion

//forEach recorre el arreglo
productos.forEach(products =>{ 
    console.log(products.id);
})


//find encuentra algo en el arreglo
const encontrar = productos.find (products =>products.nombre === "camisa");
console.log(encontrar);


//filter: filtra secun los parametros que le pidas
const filtrar = productos.filter (products => products.precio <= 2000);
console.log (filtrar);

//some: pasa el true o false
const some = productos.some (products => products.nombre === "pantalon");
const somef = productos.some (products => products.nombre === "zapatillas");

console.log (some);
console.log (somef);

//map: transforma o modifica el arreglo
const maps = productos.map (products => products.nombre);
console.log (maps)

const maps1 = productos.map (products => products.precio);
console.log (maps1);

const preciosAumentados = productos.map (products => {
    return {
        id: products.id,
        nombre: products.nombre,
        precio: products.precio + products.precio*0.15,
    }
})
console.log (preciosAumentados);


// reduce: reduce el arreglo a un solo valor 
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
const total = numbers.reduce ((acum, products)=> acum + products, 0);
console.log (total);


//sort organiza el arreglo
console.log (numbers.sort ((a,b)=> b - a));
console.log (numbers.sort((a,b) => a - b));

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

