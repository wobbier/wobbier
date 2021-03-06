var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var asset = require('metalsmith-static');
var beautify = require('metalsmith-beautify');
var date = new Date();

var data = {
  title: "Mitch Andrews | Game Developer",
  description: "The home of Mitch Andrews!",
  year: date.getFullYear(),
  url: "https://wobbier.github.io/",
  headerTitle: "MITCH ANDREWS",
  links: [{
    name: "LINKEDIN",
    url: "https://linkedin.com/in/mitchellandrews",
    isExternal: true
  },{
    name: "GITHUB",
    url: "https://github.com/wobbier",
    isExternal: true
  },{
    name: "ABOUT",
    url: "/about"
  }]
};

Metalsmith(__dirname)
  .metadata(data)
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(permalinks({
    relative: false
  }))
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(asset({
    "src": "public",
    "dest": ".",
    "createDest": true
  })).use(beautify())
  .build(function (err, files) {
    if (err) { throw err; }
  });

const express = require('express')
const app = express()

app.use(express.static('build'))

app.listen(9292, () => console.log('Site running on http://localhost:9292!'))
