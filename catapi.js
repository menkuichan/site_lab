const request = require('request');

module.exports = {
    getRandomCats: function (qt, callback) {
        request('https://api.thecatapi.com/v1/images/search?limit=' + qt,
            {json: true}, (err, res, body) => {
                if (err) return console.log(err);
                callback(body);
            });
    }
};