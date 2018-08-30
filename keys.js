console.log('keys are loaded');
require('dotenv').config();


exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.bandsintown = {
    bandsintownApi: process.env.bandsintownApi
};

exports.omdb = {
    omdbApi: process.env.omdbApi
};