/* CLASE 5: Estrucutura de propiedad*/

//const persona1 = {nombre: Juan, edad: 33, colorDeOjos: verde,};


function people (nombre, edad, altura){
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
}

const people1 = new people ("Adrian", 27, 1.90);

console.log (people1);

class info {
    constructor (nombre1, edad1, altura1){
        this.nombre1 = nombre1;
        this.edad1 = edad1;
        this.altura1 = altura1;
    }
}

function enunciado (){
    this.enunciado = `Hola soy ${nombre1}, tengo ${edad1} y mido ${altura1}`
}


const info1 = new info ("Fran",14,1.17);
const info2 = new info ("Justi", 16, 1,70);


console.log (info1);
console.log (info2);

enunciado.info1 ();



console.log (enunciado.info1 ());

