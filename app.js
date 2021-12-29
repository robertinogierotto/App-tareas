console.log ('Aplicacion de tareas');
console.log ('------------------');
const archivoTareas = require('./funcionesDeTareas');
const archivo = require('./funcionesDeTareas');
let arrayTareas = archivo.leerArchivo ();

/* para listar actividades en consola, node app.JS listar por ejemplo*/
// cuando ejecuto algo con node en console, se ejecuta process//
// le estoy dando opciones a mi programa

//let accion = process.argv[2] // con esta linea leo el argumento, que paso cuando escribo node app.js y la primera palabra luego del comando

switch (process.argv[2]) {
    case 'listar':
        arrayTareas.forEach ((tarea, i) => 
            console.log ( ( i + 1 ) + '. ' + tarea.nombre + ' - ' + tarea.estado)); 
        break;
    case 'crear':
        console.log ('Creando tarea');
        console.log ('------------------');
        let tarea = { 
           nombre: process.argv[3],
           estado: process.argv[4],
        }
        console.log ('Tarea Creada: ' + tarea.nombre + ' ' + tarea.estado)
        archivo.guardarTareas (tarea)
        console.log ('------------------');
        console.log ('Tarea guardada con exito')
    break;
    case 'filtrar':
        let filtro = process.argv [3];
        console.log ('Filtrando tareas --> ' + filtro);
        console.log ('------------------');
        let tareasFiltradas = archivo.filtrarPorEstado (filtro);
        tareasFiltradas.forEach ((tarea, i) => 
            console.log ( ( i + 1 ) + '. ' + tarea.nombre));

        console.log ('------------------');
        break;
    case undefined:
        console.log ('Atención - Tienes que pasar una acción.')
        break;
    default:
        console.log ('No entiendo qué quieres hacer.')
}

console.log ('------------------');

