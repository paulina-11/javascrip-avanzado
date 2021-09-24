// Funciones de flecha

function suma (num1, num2){
    return num1 + num2;
}


// Con la flecha se llama despues de haberla creado y con fuction normal no importa la posicion.
const suma1 = (num1, num2) =>{
    return num1 + num2;
}
document.write(`<p>${suma1(5, 3)}</p>`);