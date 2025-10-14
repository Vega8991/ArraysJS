// Ejercicio: Uso del método map en JavaScript

// 1. Crea un array de números

const numeros = [1, 2, 3, 4, 5];
console.log(numeros)
console.log('-----------------------------------------')

// 2. Utiliza map para duplicar cada número del array

const numDuplicados = numeros.map(num => num * 2)
console.log(numDuplicados)
console.log('-----------------------------------------')

// 3. Crea un array de objetos que representen productos (con propiedades nombre y precio)

const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalon', precio: 50 },
    { nombre: 'Falda', precio: 30 }
]


// 4. Utiliza map para crear un array solo con los nombres de los productos

const nombresP = productos.map(producto => producto.nombre);
console.log((nombresP));
console.log('-----------------------------------------')

// 5. Utiliza map para aplicar un descuento del 10% a todos los productos y crear un nuevo array con el precio original y el precio con descuento

const productosDescuento = productos.map(producto => {

    return {
        nombre: producto.nombre,
        precio: producto.precio,
        descuento: producto.precio * 0.7
    };
})

/*const productosDescuento = productos.map(producto => {

    return {
        ...producto,
        descuento: producto.precio * 0.7
    }
})*/

console.log(productosDescuento);
console.log('-----------------------------------------')

// 6. Crea un array de strings con nombres

const nombres = ['ana', 'juan', 'maria']
console.log(nombres)
console.log('-----------------------------------------')

// 7. Utiliza map para capitalizar la primera letra de cada nombre

const nombresCapitalizados = nombres.map(nombre => nombre[0].toUpperCase() + nombre.slice(1));
console.log(nombresCapitalizados)
console.log('-----------------------------------------')

// 8. Crea una función que formatee un número como moneda

function formatearConMoneda(numero){
    return numero.toFixed(2) + '€';
}
console.log(formatearConMoneda(3.141592653589))
console.log('-----------------------------------------')

// 9. Utiliza map junto con la función de formateo para formatear un array de precios

const precios = [20, 50, 10];
const preciosFormateados = precios.map(precio => formatearConMoneda(precio));
console.log(preciosFormateados);
console.log('-----------------------------------------')

// 10. Utiliza map tomando también el índice de cada elemento para mostrar un mensaje que incluya el número y su índice

const numerosConIndice = numeros.map((num, indice) => {
    return `Numero: ${num}, indice: ${indice}`
});
console.log(numerosConIndice);

