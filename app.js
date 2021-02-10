//const fs = require('fs');

const yargs = require('yargs');
const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes.js');
const { string } = require('yargs');

// let msg = getNotes();

// console.log(msg);


console.log(validator.isEmail('shivam@example.com'));
console.log(validator.isEmail('shivamexample.com'));

console.log(chalk.green.inverse('Sucess!!'));

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },

    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})


yargs.command({
    command: 'list',
    describe: 'list all note titles',

    handler: () => {
        notes.listNotes();
    }
})



console.log(yargs.argv);

// fs.writeFileSync('notes.txt', 'This text is generated by node.');
// fs.appendFileSync('notes.txt', ' This is appended by node.');

