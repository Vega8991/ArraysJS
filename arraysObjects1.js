// Ejercicio: Manejo básico de arrays en JavaScript

// 1. Crea un array llamado 'frutas' con 5 nombres de frutas

const frutas = ["manzana", "banana", "naranja", "fresa", "uva"];

frutas.splice(2, 1) /*Elimina una posicion del array 
y cuantos elementos quiero eliminar(si ponemos
frutas.splice(2, 2) va a eliminar naranja y fresa)*/

// 2. Imprime el array completo

console.log(frutas);

// 3. Imprime la longitud del array

console.log(frutas.length);

// 4. Accede e imprime el tercer elemento del array
console.log(frutas[2]);
// 5. Añade una fruta al final del array usando push()
frutas.push('kiwi');
console.log(frutas);
// 6. Elimina el último elemento del array usando pop()
frutas.pop('kiwi');
console.log(frutas);
// 7. Añade una fruta al principio del array usando unshift()
frutas.unshift('mango');
console.log(frutas);
// 8. Elimina el primer elemento del array usando shift()
frutas.shift();
console.log(frutas);