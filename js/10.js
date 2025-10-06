const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const empresa = {
    nombre: "Mi empresa",
    ubicacion: "Medellin",
}

const newProduct = {...producto,...empresa};

console.log(newProduct);
console.log(producto);