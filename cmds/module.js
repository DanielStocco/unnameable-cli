const { write, loadTemplate, mkdir } = require('../helpers');
const path = require('path');

exports.command = 'module <name>';
exports.desc = 'Create a new module named <name>';
exports.builder = {};
exports.handler = (args) => {

    // @@TODO: verificar que exista una aplicación creada.
    // @@TODO: Asegurarse que se esté donde se esté dentro del árbol de directorios de la app, siempre se generen los
    // archivos en la carpeta de módulos

    // @@TODO: si como argumento name se usa por ejemplo "my-module", genera este archivo index:
    /*
    module.exports = {
    my-moduleController: require('./my-module.controller'),
    my-moduleRoutes: require('./my-module.routes'),
    my-moduleService: require('./my-module.service')
    };
     */
    const moduleName = args.name;

    const index = loadTemplate('index.js');
    index.locals.module = moduleName;

    mkdir('./modules', moduleName);
    write(path.join('./modules', moduleName , 'index.js'), index.render());
};
