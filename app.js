// web.js
var express = require("express");
var logfmt = require("logfmt");
var mu = require('mu2');
var util = require('util');
var path = require('path');
var moment = require('moment-timezone');
var layout = require(__dirname + '/core/layout.js');
var database = require(__dirname + '/core/database.js');
var app = express();

//add some standard express middleware
app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/public'));
mu.root = __dirname + '/views';
mu.clearCache();

app.get('/', function (req, res) {
    var index = require(__dirname + '/data/index.js');
    index.loadData(function (data) {
        layout.render(res, 'index.mu', data, function (stream) {
            stream.pipe(res);
        });
    });
});

app.get('/game/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    var game = require(__dirname + '/data/index.js');
    game.getGame(id, function (data) {
        if (data.external === true) {
            res.redirect(data.url);
            return;
        }
        layout.render(res, 'game.mu', data, function (stream) {
            stream.pipe(res);
        });
    });
});

app.get('/blog', function (req, res) {
    var blog = require(__dirname + '/data/blog.js');
    blog.loadPosts(function (data) {
        layout.render(res, 'blog.mu', data, function (stream) {
            stream.pipe(res);
        });
    });
});

app.get('/blog/:id', function (req, res) {
    var id = req.params.id;
    var blog = require(__dirname + '/data/blog.js');
    blog.loadPost(id, function (data) {
        layout.render(res, 'post.mu', data, function (stream) {
            stream.pipe(res);
        });
    });
});

app.post('/message', function (req, res) {
    var nodemailer = require('nodemailer');

    var colors = ['249,87,48', '254,55,74', '110,167,60', '90,177,168', '186,40,51', '206,76,44', '52,130,82'];
    var color = colors[Math.floor(Math.random() * colors.length)];

    var transporter = nodemailer.createTransport();

    transporter.sendMail({
        from: 'noreply@wobbier.com',
        to: 'rastaninja77@live.com',
        subject: 'Message from wobbier.com',
        html: '<html><style type="text/css">a{color:#fff}</style><body style="background-color: rgb(' + color + '); color:#fff;margin:0; padding:20px;"><img src="http://wobbier.com/img/wobbier-logo.png" style="margin:0 auto; text-align: center;" /><hr style="border-color: #fff;" />' + req.body.message + '<br /><br />From, <br />' + req.body.email + '</body></html>'
    });
    res.write('Thank you for the message!<br> I\'ll try to get back to you soon :)');
    res.end();
});

app.get('/css/theme.css', function (req, res) {
    var colors = ['night', 'daylight'];
    var theme = Math.floor(Math.random() * 2);
    res.redirect("/css/" + colors[theme] + "-theme.css");
    /*
    console.log(momenttz.tz.guess());
    console.log(new Date());
    var colors = ['#171717', '254,55,74'];
    var backgrounds = ['#171717', '254,55,74'];
    var primary = ['#171717', '254,55,74'];
    var secondary = ['#171717', '254,55,74'];
    var theme = Math.floor(Math.random() * colors.length);
    res.writeHeader(200, {
        "Content-Type": "text/css"
    });
    res.write(".block{background: " + colors[theme] + ";} .theme-background{background: " + backgrounds[theme] + ";} .theme-primary{background: " + primary[theme] + ";}  .theme-secondary{background: " + secondary[theme] + ";}");
    res.end();
    */
});

var port = Number(process.env.PORT || 8080);
app.listen(port, function () {
    console.log("Listening on " + port);
});