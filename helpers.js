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


function mkdir(base, dir) {
    const loc = path.join(base, dir);

    console.log('   \x1b[36mcreate\x1b[0m : ' + loc + path.sep);
    mkdirp.sync(loc, MODE_0755);
}


function loadTemplate(file) {

    const contents = fs.readFileSync(path.join(__dirname, 'templates/modules', (file + '.ejs')), 'utf-8');
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

function write(file, str, mode) {
    fs.writeFileSync(file, str, { mode: mode || MODE_0666 });
    console.log('   \x1b[36mcreate\x1b[0m : ' + file);
}
