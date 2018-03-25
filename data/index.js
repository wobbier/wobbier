var mongoose = require("mongoose");
var moment = require('moment');

var Game = mongoose.model("Game");

exports.loadData = function (cb) {
    var games = Game.find({}).sort([['isFeatured', -1], ['date', -1]]).exec(function (err, dbGames) {
        for (var i = 0; i < dbGames.length; i++) {
            dbGames[i].date = moment(dbGames[i].date, "YYYY-MM-DD").format("MMMM DD, YYYY");
        }
        cb({
            title: "Mitch Andrews | Game Developer",
            games: dbGames
        });
    });
}

exports.getGame = function (slug, cb) {
    Game.find({
        'slug': slug
    }).exec(function (err, dbGames) {
        for (var i = 0; i < dbGames.length; i++) {
            dbGames[i].date = moment(dbGames[i].date, "YYYY-MM-DD").format("MMMM DD, YYYY");
        }
        console.log(dbGames);
        var background = "#gameHeader {\
                                        background: url('" + dbGames[0].background + "');\
                                        background-size: cover;\
                                        background-repeat: no-repeat;\
                                    }";
        cb({
            title: "Mitch Andrews | Game Developer",
            games: dbGames,
            backgroundStyle: background,
            customCover: dbGames[0].customCover,
            slug: slug
        });
    });
}