
//  Revisa la lógica //@ts-check

const gravedad = 9.8;
console.log (gravedad);
// Va ejecutando el codigo


try {
    // Se mete el codigo propenso a fallar
    gravedad = 10.1;
    // detecta el error
    // si no detecta error no ejecuta catch 
} catch(e) {
    // si tenemos error se ejecuta catch y lo guarda en la variable e
    console.log(e);
} finally{
    // Siempre se ejecuta, tenga error o no
    // Es opcional, solo si se quiere mostar algun mensaje o algo
    console.log('soy el finally');
}

console.log (gravedad);