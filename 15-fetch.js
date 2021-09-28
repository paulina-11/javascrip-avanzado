// Fetch nos permite hacer peticiones http desde Js
// hacemos peticiones GET o POST y en preview devuelve la página
// petición a un api recursos a un servidor o pagina web
// declaramos fetch y usamos url hacia donde queremos pedir los datos
// Sino configuramos por default nos da metodo get
// Se delara en una constante
// Si es por GET solo poner url 
const peticion = fetch('https://jsonplaceholder.typicode.com/post')
// Disponibilidad de datos asincronos porque se hace la petición pero se tiene que esperar cierto tiempo para que tengamos los datos
// promesas mi Js se va esperar para que nos llegue lo que le pedimos
.then(resp => resp.json()).then (data =>{
    console.log(data);
}) .catch(e=>{
    console.log(e)
    // Nos muestra los errores en caso de que los tenga
});
// Es una promesa que me puede devolver algo o no y asu vez devuelve otra promesa
// Le pedimos que me entregue en json js
// y cuando eso se cumpla por medio del console.log me da la respuesta



console.log(peticion);

// para las peticiones de todas las api se hace la petición y las dos promesas
// Las apis te dicen donde tu puedes solicitar documentación