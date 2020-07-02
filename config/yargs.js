const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,

    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla del multiplicar del mae que ingreses', opts)
    .command('crear', 'crear un archivo de la tabla del multiplicar del # que ingreses', opts)
    .help()
    .argv;

    module.exports = {
        argv
    }