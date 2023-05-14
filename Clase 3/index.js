/* CLASE 3: Ejemplo de for en dos situaciones diferentes */
let numero = parseInt(prompt ("Ingrese algun número"))
for (let i = 1; i <= 15; i++) { 
    let multiplicacion = i*numero;
    alert (`${numero} x ${i} = ${multiplicacion} `);
}


for (let turno = 1; turno < 21; turno++){
    let name = prompt (nombre);
    if (turno === 15) {stop;}
    alert (`Usted ${name} tiene turno es el ${turno}`);
}


/* Ejemplo de while */
let usuario = prompt ("Ingrese el nombre correcto");

while(usuario != "Andres");{
    alert ("usuario incorrecto");
    let usuario = prompt ("Ingrese el nombre correcto");
}

/*Ejemplo de swich */
let moneda = prompt("Ingrese la moneda local")
switch (moneda){
    case "cop":
        alert ("Moneda colombiana");
        break;
    case "ars":
        alert ("Moneda argentina");
        break;
    case "us":
        alert("Moneda estadounidense");
        break;
    case "clp":
        alert ("Moneda chilena");
        break;
    default:
        alert ("Moneda desconocida")
        break;

}


