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

    const jsonData = await askPackageJsonData();
    const packageJson = loadTemplate('package.json', '/main_files');

    _.assign(packageJson.locals, jsonData);

    const destinationPath = jsonData.appName || '.';
    mkdir('.', destinationPath);
    mkdir(destinationPath, 'modules');
    mkdir(destinationPath, 'config');
    mkdir(destinationPath, 'test');
    mkdir(`${destinationPath}/test`, 'unit');
    mkdir(`${destinationPath}/test`, 'libs');

    write(path.join(destinationPath, 'package.json'), packageJson.render());

};
