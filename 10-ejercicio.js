let num1 = parseInt(prompt('Introduce un numero'));
let suma= 0;   /* variable que guarda la suma */
let operacion = 0; /* variable que ayuda a saber cuantos numero ha sumado */


while((num1>0)){
    suma = suma+num1; /* entra en mi while se acumulan aquí 0+2+2+3 */
    operacion++; 
    num1 = parseInt(prompt('Introduce otro número')); /* aqui vuelve a pedir otro numero*/
    // cuando es mayor a 0 se mantiene sumando y cuando se es menor a 0 pasas a hacer la suma
}

console.log(`valor de suma es: ${suma}`);
console.log(`Promedio es: ${suma/operacion}`);

