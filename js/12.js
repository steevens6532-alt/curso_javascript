//Declarando funciones

function sumar(parametro1) {

    parametro1 = parametro1 + 1;
    return parametro1;
}

console.log(sumar(10));


//Expresion de la funcion
console.log(sumar2(25));

const sumar2 = function(parametro1){
    parametro1 = parametro1 + 1;
    return parametro1;
}


//IIFE

(function(){
    console.log("Ejecutando IIFE");
})();