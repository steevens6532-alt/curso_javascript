"use strict";

const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 400,
    disponible: true
}
console.log(producto);
Object.values(producto);

producto.nombre = "MONIUTOR XDD ";

console.log(producto);
console.log(Object.values(producto));