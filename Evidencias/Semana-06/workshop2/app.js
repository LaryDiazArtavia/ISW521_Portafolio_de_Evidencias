// Ejercicio 1: FizzBuzz clásico
console.log("Ejercicio 1: FizzBuzz clásico");

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("-----------------------------");

// Ejercicio 3: Suma de un arreglo
console.log("Ejercicio 3: Suma de un arreglo");

const numeros = [4, 8, 15, 16, 23, 42];
let suma = 0;

for (let numero of numeros) {
    suma += numero;
}

console.log("Arreglo: " + numeros.join(", "));
console.log("La suma total es: " + suma);

