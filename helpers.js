const mkdirp = require('mkdirp');
const path = require('path');


// Creo que esto le da permisos a los directorios. Ver como Hace la magia.
const MODE_0666 = parseInt('0666', 8);
const MODE_0755 = parseInt('0755', 8);

module.exports = {
    mkdir
};


function mkdir (base, dir) {
    const loc = path.join(base, dir);

    console.log('   \x1b[36mcreate\x1b[0m : ' + loc + path.sep);
    mkdirp.sync(loc, MODE_0755);
}
