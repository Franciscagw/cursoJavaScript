/*CLASE 2: vimos el comando if, if else, if else if, y los signos que pueden formar parte como condicion. if (concion) {lo que realiza con esa condicon;} else {lo que no pasa si esa condcion no se cumple}*/


let nombre = prompt ("Ingrese el nombre");
let apellido = prompt ("Ingrese el apellido");

if (nombre != "" && apellido != "") {alert (`Bienvenida ${nombre} ${apellido}`);}
else { alert ("Ingrese nombre y apellido")};

let edad = parseInt (prompt ("Ingrese tu edad"));

if (edad < 15) { alert (`${nombre} puedes formar parte del grupo de niños`);}
else if (edad < 18) { alert (`${nombre} puedes formar parte del grupo de adolesentes`);} 
else { alert (`${nombre} puedes formar parte del grupo de adultos`);}