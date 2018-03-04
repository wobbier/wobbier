var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
    title: String,
    slug: String,
    image: String,
    content: String,
    url: String,
    date: String
}, {
    collection: "Posts"
});

var Post = module.exports = mongoose.model('Post', PostSchema);