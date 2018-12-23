const inquirer = require('inquirer');

function askPackageJsonData() {
    const questions = [
        {
            name: 'appName',
            type: 'input',
            message: 'Enter the project name',
            validate: (value) => {
                if (!value.length) {
                    return 'Please enter the project name'
                }
                return true;
            }
        },
        {
            name: 'description',
            type: 'input',
            message: 'Describe your project',
            validate: (value) => {
                if (!value.length) {
                    return 'Please enter the project name'
                }
                return true;
            }
        },

        {
            name: 'author',
            type: 'input',
            message: 'Enter your name',
            validate: (value) => {
                if (!value.length) {
                    return 'Please enter your name'
                }
                return true;
            }
        },

        {
            name: 'email',
            type: 'input',
            message: 'Enter your Email',
            validate: (value) => {
                if (!value.length) {
                    return 'Please enter the project name'
                }
                return true;
            }
        },

        {
            name: 'licence',
            type: 'list',
            message: 'Licence type',
            default: 'MIT',
            choices: ['MIT', 'GPL', 'BSD'],
            validate: (value) => {
                if (!value.length) {
                    return 'Please enter the licence type'
                }
                return true;
            }
        },

        {
            name: 'version',
            type: 'input',
            message: 'Licence type',
            default: '1.0.0',
            validate: (value) => {
                // @@TODO: Validar el tipo de entrada de versión sea correcto.
                // if (!value.length) {
                //     return 'Please enter the licence type'
                // }
                return true;
            }
        },
        {
            name: 'mainFile',
            type: 'input',
            message: 'entry app file',
            default: 'app.js',
            validate: (value) => {
                // @@TODO: Validar el tipo de entrada de versión sea correcto.
                // if (!value.length) {
                //     return 'Please enter the licence type'
                // }
                return true;
            }
        }
    ];

    return inquirer.prompt(questions);
}

module.exports = {
    askPackageJsonData
};
