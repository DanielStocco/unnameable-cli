const { mkdir } = require('../helpers');

exports.command = 'init <name>';
exports.desc = 'Create a new project named <name>';
exports.builder = {};
exports.handler = function (argv){
    const destinationPath = argv.name || '.';
    mkdir('.', destinationPath);
    mkdir(destinationPath, 'modules');
};

