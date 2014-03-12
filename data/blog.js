var mongoose = require ("mongoose");

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/Blog';

mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

exports.data = {
    "project" : [{"title": "Test", "first": "true", "image": "/img/cat-blaster"},
        {"title": "Test", "first": "true"}]
};