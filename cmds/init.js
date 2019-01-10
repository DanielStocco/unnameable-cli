/**
 * Init: build skeleton app
 */

const { mkdir, loadTemplate, write } = require('../libs/helpers');
const { askPackageJsonData } = require('../libs/inquirer');
const path = require('path');
const _ = require('lodash');

exports.command = 'init';
exports.desc = 'Create a new express project ';
exports.builder = {};
exports.handler = async function (argv) {

    const jsonData = await askPackageJsonData(); // @@TODO: use a better name to this variable.
    const packageJson = loadTemplate('package.json', '/main_files');
    _.assign(packageJson.locals, jsonData);

    //load entry app file
    const entryFile = loadTemplate('entry_file', '/main_files');

    // load default config file
    const defaultConfig = loadTemplate('default.json', '/main_files');
    defaultConfig.locals.defaultPort = jsonData.defaultPort || 3000;
    defaultConfig.locals.appName = jsonData.appName;

    //creating app directories tree
    const destinationPath = jsonData.appName || '.';
    mkdir('.', destinationPath);
    mkdir(destinationPath, 'modules');
    mkdir(destinationPath, 'config');
    mkdir(destinationPath, 'test');
    mkdir(`${destinationPath}/test`, 'unit');
    mkdir(`${destinationPath}/test`, 'libs');

    // writing files
    write(path.join(destinationPath, 'package.json'), packageJson.render());
    write(path.join(destinationPath, `${jsonData.mainFile}.js`), entryFile.render());
    write(path.join(`${destinationPath}/config`, 'default.json'), defaultConfig.render());

};
