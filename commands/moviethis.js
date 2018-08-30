var request = require("request")
var inquirer = require('inquirer');
var keys = require('../keys.js');


function movieInfo() {
    inquirer
        .prompt([

            {
                type: "input",
                name: "movieName",
                message: "Which movie?"
            }
        ]).then(function (userInput) {

            var movieName = userInput.movieName;

            if (userInput.movieName === '' || !userInput.movieName) {
                movieName = "Mr. Nobody";
            }

            var urlHit =
                "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=" + keys.omdb.omdbApi;

            request(urlHit, function (error, response, body) {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                var movieInfo = (JSON.parse(body));

                console.log("Title: " + movieInfo['Title'] + "\n");
                console.log("Year Released: " + movieInfo['Released'] + "\n");
                console.log("imdb rating: " + movieInfo["imdbRating"] + "\n");
                console.log("Rotten Tomato Rating: " + movieInfo['tomatoRating'] + "\n");
                console.log("Country: " + movieInfo["Country"] + "\n");
                console.log("Language: " + movieInfo["Language"] + "\n");
                console.log("Plot: " + movieInfo['Plot'] + "\n");
                console.log("Cast: " + movieInfo['Actors'] + "\n");
            });
        })
}

module.exports = movieInfo;