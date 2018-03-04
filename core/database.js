var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var dbURI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL;

mongoose.connect(dbURI, { useMongoClient: true });

// CONNECTION EVENTS
mongoose.connection.on('connected', () => console.log('Mongoose default connection open to ' + dbURI));
mongoose.connection.on('error', (err) => console.log('Mongoose default connection error: ' + err));
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

require('../model/post');
require('../model/game');