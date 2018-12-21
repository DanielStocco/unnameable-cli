const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2));

    let cmd = args._[0] || 'help';

    if (args.version || args.v) {
        cmd = 'version';
    }

    if (args.help || args.h) {
        cmd = 'help';
    }

    if (args.build || args.b) {
        cmd = 'build';
    }

    if (args.module || args.m) {
        cmd = 'module';
    }

    switch (cmd) {

        case 'build':
            require('./cmds/build')(args);
            break;

        case 'version':
            require('./cmds/version')(args);
            break;

        case 'help':
            require('./cmds/help')(args);
            break;

        case 'module':
            require('./cmds/module')(args);
            break;

        default:
            console.error(`"${cmd}" is not a valid command!`);
            break;
    }
};
