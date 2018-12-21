const { write, loadTemplate, mkdir } = require('../helpers');
const path = require('path');


module.exports = (args) => {

    // @@TODO: verificar que exista una aplicación creada.
    // @@TODO: Asegurarse que se esté donde se esté dentro del árbol de directorios de la app, siempre se generen los
    // archivos en la carpeta de módulos
    if (!args.name && !args.n) {
        console.log('Manejar error de parámetros');
    }

    const moduleName = args.name || args.n;

    const index = loadTemplate('index.js');
    index.locals.module = moduleName;

    mkdir('./modules', moduleName);
    write(path.join('./modules', moduleName , 'index.js'), index.render());
};
