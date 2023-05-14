//objeto maths

//constantes, maximos y minimos
console.log (Math.PI);
console.log (Math.max (4,7,8,9,10,34,54,23,73,49,Infinity)); //misma funcion pero con min, y tambien se puede usar el -infitity, no puede ser un arreglo

//redondeo
console.log (Math.ceil(5.76)); //redondea hacia riba
console.log (Math.floor(6.34)); //redondea para abajo
console.log (Math.round(3.45)); //redondea al mas cercano

console.log (Math.sqrt(11)); //hace la raiz cuadrada, con numeros negativos te da error

//numeros aleatorios
console.log (Math.random ()); //n aletorios entre 0 y 1
console.log (Math.ramndom ()*10); //numero aleatorio y el 10
console.log (Math.round (Math.random()*10)); //numero aletatorio entre el o y el 10 pero entero


//clase date
console.log(Date());
console.log (new Date(2021,5,13));

const navidad = new Date(2023,11,24,23,59,59);
console.log (navidad);
console.log (navidad.toLocaleString());
console.log (navidad.toTimeString());

const añoNuevo = new Date("december,2023 31 23:59:59")
console.log (añoNuevo);
console.log (añoNuevo.toDateString());
console.log (añoNuevo.toLocaleDateString());
console.log(añoNuevo.getFullYear());
console.log (añoNuevo.getMonth());
console.log (añoNuevo.getDay());

const hoy = new Date ();
console.log (navidad-hoy);
console.log ((navidad-hoy)/milisegundosPorDia);






