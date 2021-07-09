#!/usr/bin/env node
const program = new Command()

const {hooks} = require('./lib/hooks');
const {Command} = require('commander');

program
    .option('-i, --init', "Git hooks")
    .parse(process.argv);

const options = program.opts();

if (options.init) {
    hooks();
};
