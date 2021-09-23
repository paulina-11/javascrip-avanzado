var numero = parseInt(prompt('Introduce un número'));
var numero1 = parseInt(prompt('Introduce otro número'));

if(numero > numero1){
    console.log(numero+numero1);
    console.log(numero-numero1);
} else if (numero1 > numero){
    console.log(numero*numero1);
    console.log(numero/numero1);
} else if (numero===numero1){
    console.log ("Son iguales");
}