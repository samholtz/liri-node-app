var request = require("request")
var inquirer = require('inquirer');
var keys = require('../keys.js');
var moment = require('moment');
var bandsintown = require('bandsintown')(keys.bandsintown.bandsintownApi);


function concertThis() {

    inquirer
        .prompt([

            {
                type: "input",
                name: "bandName",
                message: "Which artist would you like to see?"
            }
        ]).then(function (artist) {
            bands = artist.bandName;

            bandsintown
                .getArtistEventList(bands)
                .then(function (events) {

                    events.forEach((event, i) => {
                        var date = event.datetime
                        var dateFormatted = moment(date).format('MM/DD/YYYY');
                        console.log(`${i + 1}. ${dateFormatted}`)
                        console.log(`Place: ${event.venue.name}`)
                        console.log(`Location: ${event.venue.city}, ${event.venue.region} `)
                        console.log('====================')

                    });

                });
        });
}
module.exports = concertThis;