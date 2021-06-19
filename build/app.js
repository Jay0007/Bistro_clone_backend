"use strict";

var history = require('connect-history-api-fallback');

var path = require('path');
/* eslint-disable no-console */


var express = require('express'); // expresss app


var app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"](path.resolve(__dirname, './dist'), {
  maxAge: '1y',
  etag: false
}));
app.use(history());

require('babel-register')({
  presets: ['es2015']
});

var morgan = require('morgan'); // Premade middleware -> Logs all the requests to the console


app.use(morgan('tiny'));

var bodyParser = require('body-parser'); // to make the requests readable by node


app.use(bodyParser.json());

var cors = require('cors'); // To let other ports use the requests


app.use(cors());

var cookieParser = require('cookie-parser'); // Using cookie parser


app.use(cookieParser());

var dotenv = require('dotenv');

dotenv.config();

var mongoose = require('mongoose'); // Mongoose provides a straight-forward, schema-based solution to model your application data


var dbURL = "mongodb+srv://".concat(process.env.DB_USERNAME, ":").concat(process.env.DB_PASSWORD, "@cluster0.ac1hu.mongodb.net/").concat(process.env.DB_NAME, "?retryWrites=true&w=majority");
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return app.listen(process.env.PORT);
}) // listening to requests only after the database connection is complete
["catch"](function (err) {
  return console.log(err);
});
app.use(require('./routes/validationRoutes'));
app.use(require('./routes/menuRoutes'));
app.use(require('./routes/userdetailsRoutes'));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});
app.set('view engine', 'ejs');