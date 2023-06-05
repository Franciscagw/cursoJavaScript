//asincronia funciones

//setTimeout(funcion,timer)
setTimeout(()=>{
    console.log("hola");
},3000);//despues de los tres segundos se ejecuta el codigo

//concepto call stack, esencia de js, se apilan los procedimientos, el call stack no puede estar siempre lleno/ocupado a no ser de que tenga un bloque infinito

//event loop, coordina el stack 

//steInterval (funtion, timer)

setInterval(()=>{
    console.log("hola");
}, 1000);//infinitos reproduccion

//clearInterval, para terminar el intervalo

//promesas

//new Promise ((resolve, reject)=>{
//    cuerpo de la promesa
//})
// manejar las promesas con teh y catch

cons