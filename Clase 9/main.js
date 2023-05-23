/*CLASE 9 DOM: */

console.log (document);
console.log (document.body);


//get element by
//inner.html
//inner tex



let div = document.getElementById ("primerdiv");
console.log (div.innerHTML);
console.log (div.innerText);

let saludo = document.getElementsByClassName (saludo);
console.log (saludo[0].innerHTML);
console.log (saludo[1].innerHTML);
console.log (saludo[2].innerHTML);

let divs = document.getElementsByTagName("div");
console.log (div.innerHTML);

let parrafo = document.getElementById("parrafo");
parrafo.innerHTML = "Buenas tardes";


//creacion de nodos
let ache = document.createElement ("p");//creacion de la etiqueta
ache.innerHTML = "<h1> Hola,buen dia</h1>"; //asignacion de contenido


//remove
ache.remove();
