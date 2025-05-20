const productos = [
    {nombre: "Laptop", precio: 12000 },
    {nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 700 },
    { nombre: "Monitor", precio: 3000 },
]

// listar productos con precio mayor a 1000 y que solo se obtengan los nombres
const nombres = productos
    .filter(producto => producto.precio > 1000)
    .map(producto => producto.nombre);

console.log(nombres); // ["Laptop", "Monitor"]