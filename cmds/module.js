const { write, loadTemplate, mkdir } = require('../libs/helpers');
const path = require('path');
const _ = require('lodash');

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

    const index = loadTemplate('index.js', '/modules');
    index.locals.module = moduleName;

    const controller = loadTemplate('controller.js', '/modules');
    controller.locals.module = moduleName;

    const service = loadTemplate('service.js', '/modules');
    service.locals.module = moduleName;
    service.locals.modelName = _.capitalize(moduleName);



    mkdir('./modules', moduleName);
    write(path.join('./modules', moduleName , 'index.js'), index.render());
    write(path.join('./modules', moduleName , `${moduleName}.controller.js`), controller.render());
    write(path.join('./modules', moduleName , `${moduleName}.service.js`), service.render());
};
