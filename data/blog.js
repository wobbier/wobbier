var mongoose = require("mongoose");
var moment = require('moment');
var uristring = process.env.MONGOLAB_URI || 'mongodb://site_read_only:alpine@ds133368.mlab.com:33368/heroku_0dhqbbgd';
var PostSchema = new mongoose.Schema({
    _id: String,
    title: String,
    slug: String,
    image: String,
    content: String,
    url: String,
    date: String
}, {
    collection: "Posts"
});

mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');

exports.loadPosts = function (cb) {
    mongoose.connect(uristring, function (err, res) {
        if (err) {
            console.log('ERROR connecting to: ' + uristring + '. ' + err);
        } else {
            console.log('Succeeded connected to: ' + uristring);

            Post.find({}).sort("-date").exec(function (err, docs) {
                for (var i = 0; i < docs.length; i++) {
                    docs[i].date = moment(docs[i].date).format("MMMM DD, YYYY");
                }
                mongoose.connection.close();
                cb({
                    title: "Blog | Mitch Andrews | Game Developer",
                    posts: docs
                });
            });
        }
    });
}

exports.loadPost = function(id, cb) {
    mongoose.connect(uristring, function(err, res) {
        Post.find({'slug': id}).exec(function(err, posts) {
            posts[0].date = moment(posts[0].date).format("MMMM DD, YYYY");
            mongoose.connection.close();
            cb({
                title: posts[0].title + ' | Mitch Andrews',
                post: posts,
                slug: id
            });
        });
    });
}