// Arreglos se identifica por los corchetes, estructura de datos

// Declaración de arreglos

const arreglo =[];
const arreglo2 = new Array();

let lenguajes = ['Javascript','Java','PHP','Python','C#','C++','Scala','Rust', 'Ruby', 'Cobol'
]

// forEach, combina el ciclo for pero directamente en el arreglo
// Función anonima
// Muestra todo lo que este dentro del arreglo
// index muestra la posición
document.write('<ul>')
lenguajes.forEach( function(lenguaje,index) {
   
    document.write( `<li>${index}-${lenguaje} </li>` );
});
document.write('</ul>')

console.log(lenguajes.length);

// Map, crea un nuevo arreglo con los resultados
// Otra forma de declarar, map no puede seleccionar elementos unicos, si pones 10 te devuelve 10
let numeros = Array(2,3,4,27,19,12);
// los array se almacenan en numeros
// Hace copia de numeros en numeros 2 y luego los guarda en numero
let numeros2 = numeros.map(function(numero) {
    // el arreglo nuevo hace que puedan multiplicarse dentro de la funcion se pone una variable temporal en donde se almacenan los datos para poder multiplicarse 
    return numero * 2;
});
console.log(numeros);
console.log(numeros2);

// Includes busca algo y si se encuentra dentro del arreglo nos dice si es verdadero
// Solo dice si esta dentro del arreglo o no esta

console.log(lenguajes.includes('Go'));
console.log(lenguajes.includes('PHP'));

// filter
// crea un nuevo arreglo con todos los elementos que cumplan con la condición o con la funcion

let filtrados = numeros.filter(function(numero){
    // excluye a todos los numeros que no son mayor a 10 y los que estan dentro del parametro los muestra
    if(numero>10){
        return numero;
    }
})

console.log(filtrados);