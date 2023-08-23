const express = require('express');
const routes = require('./routes/index.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
});
const app = express();

const port = process.env.PORT || 3000;
// send the control to routes/index.js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes()); 
app.listen(port, () => console.log(`App listening on port ${process.env.PORT}!`));
// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.send('Test!'));
