let nombre = prompt ("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

function nombreApellido (){
    return (`${nombre} ${apellido}`)
}

if (nombreApellido()!= "") {alert (`Bienvenido ${nombreApellido()} al centro medico`);}
else { alert ("Ingrese el nombre y el apellido")};

let consulta = parseInt (prompt (`Paciente ${nombreApellido()} elija el numero que corresponda a consulta 1) Enfermería 2)Odontológica 3)Medica 4)Psicológica`))

if (consulta === 1){
    for ((turno) => 1; turno < 20;turno++){
        alert (`${nombreApellido ()} le corresponde el ${turno} de la especialidad 1) Enfermería`);
    }
} else if (consulta === 2){
    for ((turno1) => 1; turno1 < 20;turno1++){
        alert (`${nombreApellido ()} le corresponde el ${turno1} de la especialidad 2) Odontológica`);
    }
} else if (consulta === 3){
    for (let turno2 = 1; turno2 < 20;turno2++){
        alert (`${nombreApellido ()} le corresponde el ${turno2} de la especialidad 3) Médica`);
    }
}else if (consulta === 4){
    for (let turno3 = 1; turno3 < 20; turno3++){
        alert (`${nombreApellido ()} le corresponde el ${turno3} de la especialidad 4) Psicológica`);
    }
}

