var mongoose = require("mongoose");
var moment = require('moment');
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://dev:alpine@oceanic.mongohq.com:10008/app22656752'; //'mongodb://localhost/app22656752';
var age = getAge(new Date(1994, 01, 03));
var GameSchema = new mongoose.Schema({
    _id: String,
    title: String,
    slug: String,
    isUnity: Boolean,
    isFlash: Boolean,
    isVideo: Boolean,
    hidden: Boolean,
    external: Boolean,
    url: String,
    customCover: Boolean,
    gameFile: String,
    thumb: String,
    background: String,
    date: String,
    description: String
}, {
    collection: "Games"
});

mongoose.model('Game', GameSchema);
var Game = mongoose.model('Game');

exports.loadData = function (cb) {
    mongoose.connect(uristring, function (err, res) {
        if (err) {
            console.log('ERROR connecting to: ' + uristring + '. ' + err);
        } else {
            console.log('Succeeded connected to: ' + uristring);

            Game.find({}).sort("-date").exec(function (err, dbGames) {
                for (var i = 0; i < dbGames.length; i++) {
                    dbGames[i].date = moment(dbGames[i].date).format("MMMM DD, YYYY");
                }
                mongoose.connection.close();
                cb({
                    title: "Mitch Andrews | Game Developer",
                    age: age,
                    games: dbGames
                });
            });
        }
    });
}

exports.getGame = function (slug, cb) {
    mongoose.connect(uristring, function (err, res) {
        if (err) {
            console.log('ERROR connecting to: ' + uristring + '. ' + err);
        } else {
            console.log('Succeeded connected to: ' + uristring);

            Game.find({
                'slug': slug
            }).exec(function (err, dbGames) {
                for (var i = 0; i < dbGames.length; i++) {
                    dbGames[i].date = moment(dbGames[i].date).format("MMMM DD, YYYY");
                }
                console.log(dbGames);
                mongoose.connection.close();
                cb({
                    title: "Mitch Andrews | Game Developer",
                    games: dbGames,
                    customCover: dbGames[0].customCover,
                    slug: slug
                });
            });
        }
    });
}

function getAge(birthdate, callback) {
    var date = new Date();
    var age = date.getFullYear() - birthdate.getFullYear();
    if (birthdate.getMonth() > date.getMonth() || (birthdate.getMonth() >= date.getMonth() && birthdate.getDay() > date.getDay())) {
        age -= 1;
    }
    return age;
}
