/*CLASE 11: Storage and json */
//local storage guarda mas tiempo el session storage se va

console.log (localStorage);

localStorage.setItem("nombre","francisca") //nombre, valor, auque se reinicia se guarda y queda toda la informacion guardada, se guarda como strings siempre
//para guardar setItem

let nombre = localStorage.getItem ("nombre");
console.log (nombre);


console.log (sessionStorage);
sessionStorage.setItem ("nombre", "franco"); //es mas corta la sesion

//recorrer el local storage 
for (let i = 0; i<localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log (clave);
    console.log ("clave",clave);
    console.log ("valor", localStorage.getItem(clave));
} //tiene la key como funcion especifica (accedes al valor y la calve)

//como eliminar el local storage o e session storage
localStorage.removeItem ("nombre"); //eliminar dato especifco
localStorage.clear (); //elimina todo el storage

//json texto plano para enviar info atraves de la web, en el sotrage guardar objetos o arrays


let arreglo = ["juan","camila","jose"];
localStorage.setItem ("arreglo", JSON.stringify(arreglo));
console.log (JSON.parse(arreglo));

let arrayy = localStorage
