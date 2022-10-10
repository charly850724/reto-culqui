const express = require('express');
const config = require('../config.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const permutation = require('./routes/permutation');

const PORT = config.PORT;
const HOST = config.HOST;

const app = express();

app.use(bodyParser.json());

app.use('/api/permutation', permutation);

mongoose.connect(
    "mongodb://mongo/local",
    { useNewUrlParser: true },
    (err, res) => {
        err && console.log("Error conectando a la BD");
        app.listen(PORT, HOST);
        console.log(`Running on http://${HOST}:${PORT}`);
    }
);
