var mongoose = require("mongoose");
var moment = require('moment');
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://dev:alpine@oceanic.mongohq.com:10008/app22656752'; //'mongodb://localhost/app22656752';
var PostSchema = new mongoose.Schema({
    _id: String,
    title: String,
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
