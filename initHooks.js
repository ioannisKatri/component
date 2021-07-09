const {exec} = require('child_process');
const chalk = require("chalk");
const boxen = require("boxen");
const {Command} = require('commander');


const print = (message) => console.log(message);
const message = (message, success) => {
    const greeting = chalk.white.bold(message);
    const boxenOptions = {
        padding: 1,
        margin: 1,
        borderStyle: "round",
        borderColor: success ? "green" : "red",
        backgroundColor: "#555555"
    };

    const msgBox = boxen(greeting, boxenOptions);
    print(msgBox);
}


const currentPath = `${__dirname}/hooks`
const commands = "" +
    "git rev-parse --is-inside-work-tree &&" +
    `git config --local core.hooksPath ${currentPath}`


const initHooks = function () {
    print("Initializing procedure....")
    exec(commands, (err, stdout, stderr) => {
        if (err) {
            if (stderr.indexOf('.git') >= 0) {
                message("Git was not found locally", false)
                return;
            }

            message(`Unexpected Error`, false)
            print(err.message)
            return;
        }

        message(`Git-Hooks are enabled`, true)
    });
}

module.exports = function() {
    const program = new Command()

    program
        .option('-i, --init', 'some desc')
        .parse(process.argv);

    const options = program.opts();

    if (options.init) {
        initHooks()
    }
}
