var mongoose = require("mongoose");
var moment = require('moment');

var PostData = mongoose.model("Post");

exports.loadPosts = function (cb) {
    PostData.find({}).sort("-date").exec(function (err, docs) {
        for (var i = 0; i < docs.length; i++) {
            docs[i].date = moment(docs[i].date).format("MMMM DD, YYYY");
        }
        cb({
            title: "Blog | Mitch Andrews | Game Developer",
            posts: docs
        });
    });
}

exports.loadPost = function (id, cb) {
    PostData.find({ 'slug': id }).exec(function (err, posts) {
        posts[0].date = moment(posts[0].date).format("MMMM DD, YYYY");
        cb({
            title: posts[0].title + ' | Mitch Andrews',
            post: posts,
            slug: id
        });
    });
}