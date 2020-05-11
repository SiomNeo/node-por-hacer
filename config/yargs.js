const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como ompletado o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra un elemento', {
        descripcion
    })
    .command('listar', 'muestra los elementos por hacer')
    .help()
    .argv;

module.exports = {
    argv
}