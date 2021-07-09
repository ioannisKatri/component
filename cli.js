#!/usr/bin/env node
const {hooks} = require('./lib/hooks');

const program = new Command()

program
    .option('-i, --init', "Git hooks")
    .parse(process.argv);

const options = program.opts();


if (options.init) {
    hooks();
};
