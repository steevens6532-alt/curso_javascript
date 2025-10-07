const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carritoCompras = [
    {nombre: "Monitor", precio: 200},
    {nombre: "Mouse", precio: 300},
    {nombre: "CPU", precio:500},
    {nombre: "Microfono", precio: 100},
];



//forEach

meses.forEach(function(mes) {
    if(mes == 'Marzo'){
        console.log("Marzo si existe")
    }
});


const frutas = ['Pera', 'Platano', 'Manzana', 'Sandia'];

frutas.forEach(function(fruta){
    if(fruta == 'Pera' ) {
        console.log('Si hay esa fruta');
    }
});


//.includes

let pertenece = meses.includes('Febrero');
console.log(pertenece);

//.some UTIL PARA ARREGLOS DE OBJETOS

pertenece = carritoCompras.some(function(producto){
    return producto.nombre == 'Mouse'
});

console.log(pertenece);