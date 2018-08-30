const fs = require('fs');
const path = require("path");
const commands = require("../runCommands.js")


console.log(process.cwd())
function doWhat() {
    var file = path.resolve(__dirname, '../random.txt')
    fs.readFile(file, "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        var textString = data
        const [cmd, opt] = textString.split(",")
        console.log(cmd, opt)
        console.log("commands");
        console.log(commands);
        commands.run(cmd, opt)

    });
}
module.exports = doWhat;
