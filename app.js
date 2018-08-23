var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var asset       = require('metalsmith-static');
var date        = new Date();

Metalsmith(__dirname)
  .metadata({
    title: "Mitch Andrews | Game Developer",
    description: "The home of Mitch Andrews!",
    year: date.getFullYear(),
    url: "http://wobbier.github.io/"
  })
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
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });

const express = require('express')
const app = express()

app.use(express.static('build'))

app.listen(9292, () => console.log('Site running on http://localhost:9292!'))
