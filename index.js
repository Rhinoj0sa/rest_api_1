const express = require('express');
const routes = require('./routes/index.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo_db:27017', {
    useNewUrlParser: true,

});
const app = express();

const port = 3000;
// send the control to routes/index.js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes()); 
app.listen(port, () => console.log(`App listening on port ${port}!`));
// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.send('Test!'));
