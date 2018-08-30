var commands = require("./commands/index.js")


function run(command, option) {

    switch (command) {
        case 'movie-this':
            commands.movieInfo();
            break;

        case 'concert-this':
            commands.concertThis();
            break;

        case 'spotify-this-song':
            var searchSong = process.argv[3] || option || null
            commands.spotifyThis(searchSong);
            break;

        case 'do-what-it-says':
            commands.doWhat();
            break;

        default:
            console.log("Please enter a valid command")
    }
}

module.exports = { run };
// exports.run = run;