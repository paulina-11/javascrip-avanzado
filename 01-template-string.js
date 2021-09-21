const nombre = prompt('Cuál es tú nombre?');
const edad = prompt('Cuál es tú edad?');

// forma de declarar Js las cons o codigo Js van dentro de ${}
const saludo = `<h1> Hola ${nombre} saludos. <br/> Tú edad es ${edad} años </h1>`;
// Separar las etiquetas del texto

console.log(saludo);
document.write(saludo);