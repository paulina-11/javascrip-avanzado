// ciclo while Repetir codigo mientras una condición sea verdadera cuando no sabemos cuantas veces se va repetir

// let num1 = parseInt(prompt('Ingrese un número'));

// isNan pregunta si ese elemento es un numero y en caso de que no sea un numero continua preguntando hasta que lo ingreses

// while(isNaN(num1)){
//     num1 = parseInt(prompt('Ingrese un número'));
// }

// let num1 = parseInt(prompt('Ingrese un número'));
// const num_secreto = 23
// let intentos =1;
// while(num1 !==num_secreto){
//     console.log ('No adivinaste el numero secreto, intenta de nuevo');
//     console.log(`Intento: ${intentos}`);
//     intentos++;
//     num1 = parseInt(prompt('Ingrese un número'));
// }

// console.log('Felicidades, encontraste el número secreto')

// CICLO DO WHILE
let num1 = parseInt(prompt('Ingresa un numero'));

do {
    document.write(`<p>El numero introducido es: ${num1}</p>`);
    num1 = parseInt(prompt('Ingresa un numero'));
}
while(num1 > 5);