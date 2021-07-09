const { exec } = require('child_process');
const chalk = require("chalk");
const boxen = require("boxen");

// eslint-disable-next-line no-undef
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

    const msgBox = boxen( greeting, boxenOptions );
    print(msgBox);
}



const path = `${__dirname}/hooks`
const commands = "" +
    "git rev-parse --is-inside-work-tree &&" +
    `git config --local core.hooksPath ${path}`

// TODO check if folder exist /hooks

exec(commands, (err, stdout, stderr) => {
    if (err) {
        if (stderr.indexOf('.git') >= 0) {
            message("Git was not found locally", false)
            return;
        }

        message(`Unexpected Error`,false)
        print(err.message)
        return;
    }

    const srcDir = `path/to/file`;
    const destDir = `path/to/destination/directory`;

// To copy a folder or file
    fs.copyFileSync(srcDir, destDir, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("success!");
        }
    });

    message(`Git-Hooks are enabled`,true)
});
