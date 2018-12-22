const { version } = require('./package.json');

require('yargs')
    .commandDir('cmds')
    .demandCommand()
    .help()
    .version('version', 'Orgasmic-cli version', version)
    .alias('version', 'v')
    .alias('help', 'h')
    .argv;
