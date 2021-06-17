import history from 'connect-history-api-fallback';

const path = require('path');
/* eslint-disable no-console */
const express = require('express');
// expresss app
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, './dist'), { maxAge: '1y', etag: false }));
app.use(history());

const morgan = require('morgan');
// Premade middleware -> Logs all the requests to the console
app.use(morgan('tiny'));

const bodyParser = require('body-parser');
// to make the requests readable by node
app.use(bodyParser.json());

const cors = require('cors');
// To let other ports use the requests
app.use(cors());

const cookieParser = require('cookie-parser');
// Using cookie parser
app.use(cookieParser());

const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');
// Mongoose provides a straight-forward, schema-based solution to model your application data
const dbURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ac1hu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000)) // listening to requests only after the database connection is complete
  .catch((err) => console.log(err));

app.use(require('./routes/validationRoutes'));
app.use(require('./routes/menuRoutes'));
app.use(require('./routes/userdetailsRoutes'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.set('view engine', 'ejs');
