const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const util = require('util');

// Creo que esto le da permisos a los directorios. Ver como Hace la magia.
const MODE_0666 = parseInt('0666', 8);
const MODE_0755 = parseInt('0755', 8);

module.exports = {
    mkdir,
    loadTemplate,
    write
};

/**
 * Create dirs helper.
 * @param base
 * @param dir
 */
function mkdir(base, dir) {
    const loc = path.join(base, dir);

    console.log('   \x1b[36mcreate\x1b[0m : ' + loc + path.sep);
    mkdirp.sync(loc, MODE_0755);
}

/**
 * create a template instance that will be rendered.
 * @param file
 * @param folder
 * @returns {{locals: any, render: (function(): (String|Promise<String>))}}
 */
function loadTemplate(file, folder) {

    const contents = fs.readFileSync(path.join(__dirname,'../', `templates${folder}`, (file + '.ejs')), 'utf-8');

    // object whit variables to be rendered into template
    const locals = Object.create(null);

    function render() {
        return ejs.render(contents, locals, {
            escape: util.inspect
        });
    }

    return {
        locals: locals,
        render: render
    };
}

/**
 * write a file whit permissions.
 * @param file
 * @param str
 * @param mode
 */
function write(file, str, mode) {
    fs.writeFileSync(file, str, { mode: mode || MODE_0666 });
    console.log('   \x1b[36mcreate\x1b[0m : ' + file);
}
