const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 400,
    disponible: true
}

console.log(producto);

producto.imagen = "iamgen.jpg";

console.log(producto);

//Eliminar propiedades
delete producto.disponible;
console.log(producto);