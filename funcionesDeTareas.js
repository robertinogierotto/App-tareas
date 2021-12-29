const fs = require ('fs')

let archivoTareas = {
    archivo : 'tareas.json',
    leerArchivo: function () {
        let tareas = fs.readFileSync ('./tareas.json', 'utf-8');
        return JSON.parse (tareas)
    },
    escribirJSON: function (arrayDeTareas) {
        let arrayString = JSON.stringify(arrayDeTareas)
        fs.writeFileSync (this.archivo, arrayString)

    }, 
    guardarTareas: function (tarea) {
        //let tareas = fs.readFileSync(this.archivo, 'utf-8')
        //let tareasObj = JSON.parse (tareas)
        let tareasObj = this.leerArchivo ()
        tareasObj.push (tarea)
        this.escribirJSON (tareasObj)
    },
    filtrarPorEstado: function (estadoFiltrar) {
        let tareas = this.leerArchivo ()
        let tareasFiltradas = tareas.filter (
            function (t) {
                return t.estado === estadoFiltrar;
            }
        )
        return tareasFiltradas
    }
}

module.exports = archivoTareas;

// COMO LO HABIAMOS HECHO ORIGINALMENTE:
/* file system, para leer archivos, lo requiero primero y luego uso la funcion readfilesync*/

/*const fs = require ('fs')
let tareasJson = (fs.readFileSync ('./tareas.json', 'utf-8'))
let tareas = JSON.parse (tareasJson)
*/

