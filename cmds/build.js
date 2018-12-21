const { mkdir } = require('../helpers');


module.exports = (args) => {
    if (!args.name && !args.n) {
        console.log('Manjejar error de parámetros');
    }

    // @@TODO: Validar que los argumentos "path" o "p" vengan y sean tipo string. Pueden venir con valor true, pero el
    // sólo hecho de esciribr el argumento en el comando. orgasmic --path => path === true.


    const destinationPath = args.name || args.n || '.';
    mkdir('.', destinationPath);
    mkdir(destinationPath, 'modules');


    console.log(args);
};
