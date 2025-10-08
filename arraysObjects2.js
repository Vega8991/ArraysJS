// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Crea un array de números con varios valores

const numeros = [1, 2, 3, 4, 5];

// 2. Recorre el array con un bucle for e imprime cada elemento
console.log('Recorre el array con un bucle for')
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}
console.log('----------------------------------')
// 3. Recorre el array con forEach e imprime cada elemento
console.log('Recorre el array con forEach')
numeros.forEach(num => {
    console.log(num)
})
console.log('----------------------------------')
// 4. Calcula la suma de los números usando un bucle for
let suma = 0;
for(let i = 0; i < numeros.length; i++){
    suma += numeros[i]
}
console.log('Suma for: ', suma)
console.log('----------------------------------')
// 5. Calcula la suma de los números usando forEach
let sumaFor = 0;
numeros.forEach(num => {
    sumaFor += num;
})
console.log('Suma forEach: ', sumaFor)
console.log('----------------------------------')
// 6. Crea un nuevo array con los números pares usando un bucle for
let numPares = [];
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        numPares.push(numeros[i]);
    }
}
console.log('Números pares for:', numPares)
console.log('----------------------------------')
// 7. Crea un nuevo array con los números pares usando forEach
let numParesF = [];
numeros.forEach(num => {
    if(num % 2 === 0){
        numParesF.push(num)
    }
})
console.log('Numeros pares forEach: ', numParesF)
console.log('----------------------------------')