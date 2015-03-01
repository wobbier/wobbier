// web.js
var express = require("express"),
    logfmt = require("logfmt"),
    mu = require('mu2'),
    util = require('util'),
    path = require('path'),
    layout = require(__dirname + '/core/layout.js'),
    app = express();

//add some standard express middleware
app.configure(function() {
    app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(logfmt.requestLogger());
    app.use(express.static(__dirname + '/public'));
    mu.root = __dirname + '/views';
    mu.clearCache();
});

app.get('/', function(req, res) {
    var index = require(__dirname + '/data/index.js');
    index.loadData(function(data) {
        layout.render(res, 'index.ms', data, function(stream) {
            stream.pipe(res);
        });
    });
});

app.get('/game/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    var game = require(__dirname + '/data/index.js');
    game.getGame(id, function(data) {
        if (data.external === true) {
            res.redirect(data.url);
            return;
        }
        layout.render(res, 'game.ms', data, function(stream) {
            stream.pipe(res);
        });
    });
});

app.get('/blog', function(req, res) {
    var blog = require(__dirname + '/data/blog.js');
    blog.loadPosts(function(data) {
        layout.render(res, 'blog.ms', data, function(stream) {
            stream.pipe(res);
        });
    });
});

app.post('/message', function(req, res) {
    var nodemailer = require('nodemailer');

    var colors = ['249,87,48', '254,55,74', '110,167,60', '90,177,168', '186,40,51', '206,76,44', '52,130,82'];
    var color = colors[Math.floor(Math.random() * colors.length)];

    var transporter = nodemailer.createTransport();


    transporter.sendMail({
        from: 'noreply@wobbier.com',
        to: 'mitchdandrews@gmail.com',
        subject: 'Message from wobbier.com',
        html: '<html><body style="background-color: rgb(' + color + '); color:#fff;margin:0; padding:20px;"><img src="http://wobbier.com/img/wobbier-logo.png" style="margin:0 auto; text-align: center;" /><hr style="border-color: #fff;" />' + req.body.message + '<br /><br />Love, <br />' + req.body.email + '</body></html>'
    });
});

app.get('/css/theme.css', function(req, res) {
    var colors = ['249,87,48', '254,55,74', '110,167,60', '90,177,168', '186,40,51', '206,76,44', '52,130,82'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    res.writeHeader(200, {
        "Content-Type": "text/css"
    });
    res.write("body, .block{background: rgb(" + color + ")}");
    res.end();
});

app.get('/css/:id.css', function(req, res) {
    var id = req.params.id;
    res.writeHeader(200, {
        "Content-Type": "text/css"
    });
    res.write("body {background: url('https://dl.dropboxusercontent.com/u/14759830/Portfolio/" + id + "-cover.png'); background-size: cover; background-repeat: no-repeat;}");
    res.end();
});

var port = Number(process.env.PORT || 9292);
app.listen(port, function() {
    console.log("Listening on " + port);
});