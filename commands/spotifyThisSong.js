var Spotify = require('node-spotify-api');
var request = require("request")
var inquirer = require('inquirer');
var keys = require('../keys.js');


function spotifyThis(songString) {

    if (songString) {
        searchSpotify(songString)
    } else {

        inquirer
            .prompt([

                {
                    type: "input",
                    name: "song",
                    message: "What song would you like to hear?"
                }
            ]).then(function (response) {
                var song = response.song;
                if (response.song === '' || !response.song) {
                    song = "The Sign";
                }
                searchSpotify(song);

            });
    }
}

function searchSpotify(song) {
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });

    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var display = data.tracks.items[0]

        console.log("\n")
        console.log("Artist name: " + display.artists[0].name + "\n")
        console.log("album name: " + display.album.name + "\n")
        console.log("Song name: " + song + "\n")
        console.log("Song link: " + display.artists[0].href + "\n")
    })
}
module.exports = spotifyThis;