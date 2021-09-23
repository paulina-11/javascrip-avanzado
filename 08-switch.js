// Estruvtura de control de flujo
// Tipo if

// const edad = parseInt(prompt('Ingrese su edad'))
// let mensaje = '';

// // Solo es Igualdad
// switch (edad){
//     case 18:
//         mensaje = 'Acabas de cumplir la mayoria de edad';
//         break;
//     case 25:
//         mensaje = 'Ya eres un adulto';
//         break;
//     case 70:
//         mensaje = 'Ya eres de la tercera edad';
//         break;
//     default:
//         mensaje = 'Fuera de rango de edad'
//         break;
// }

// document.write(`<p>${mensaje}</p>`)

const nombre = prompt('Ingrese su nombre');
let mensaje = '';

switch(nombre){
    case 'Carlos':
        mensaje ='Eres administrador';
        break;
    case 'Juan':
        mensaje ='Eres usuario';
        break;
    default:
        mensaje='No tienes permisos para usar el sistema';

}
document.write(`<p>${mensaje}</p>`)