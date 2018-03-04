var mongoose = require("mongoose");

var GameSchema = new mongoose.Schema({
    title: String,
    slug: String,
    isUnity: Boolean,
    isVideo: Boolean,
    selectedTime: Boolean,
    startTime: Number,
    endTime: Number,
    isFeatured: Boolean,
    slider: Boolean,
    hidden: Boolean,
    external: Boolean,
    images: Array,
    tags: Array,
    downloads: Object,
    url: String,
    customCover: Boolean,
    gameFile: String,
    thumb: String,
    background: String,
    titleImage: String,
    date: String,
    description: String
}, {
        collection: "Games"
    });

var Game = module.exports = mongoose.model('Game', GameSchema);