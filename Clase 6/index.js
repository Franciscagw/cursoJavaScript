/*CLASE 6:  arrays, es una lista de objetos que arranca en 0 y hasta el numero de objetos que tenga, siempre va entre corchetes*/

const personas = ["Maria", "Juan,","Esteban", "Mariana", "Carla", "Jose"];

const numeros = [0,1,2,3,4,5,6,7,8,9];

const items =["remera","gorra","camisa","pantalon","short","zapatos","medias"];

console.log (personas);
console.log (items[3]);
let resultado = numeros [3] + numeros[7];
console.log (resultado);


/* Elementos de arrays */

console.log(items.length); //el largo de un array (cantidad de items) y se puede usar para definir el limite de una iteracion

personas.push ("Marcelo"); //agrega elemento al final
console.log (personas);

personas.unshift ("Luis");//agrega elemento al principio del arreglo
console.log (personas);

personas.pop ();//elimina el ultimo elemento
console.log(personas);

personas.shift();//elmina el objeto del principio del arreglo
console.log (personas);

personas.splice(1,3); //permite eliminar elementos, el primero indica como indice y el segundo la cantidad de eliminados
console.log (personas);

console.log (personas.join(" - ")); // une los items del array con lo que lo indiques

const numbersClothes = numeros.concat(items);//une dos listas
console.log(numbersClothes);

const mujeres = personas.slice (0,2);
console.log (mujeres);

console.log (personas.indexOf("Maria"));// permite tener el indice del elemento de un array y si no pertenece te dara el -1
console.log (personas.indexOf("Pedro"));

console.log (personas.includes("Maria"))//indica si true o false
console.log(personas.includes ("Ernesto"));

numeros.reverse ();//modifica el array original y losmpone a reves
console.log (numeros);


