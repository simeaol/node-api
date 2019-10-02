const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

var app = express();
mongoose.connect("mongodb://localhost:27017/nodeapi", 
{useNewUrlParser: true, useUnifiedTopology: true});

requireDir("./src/models/");
app.use(express.json);
app.use(cors())

const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.use('/*', (req, resp) => resp.send('Welcome!'));



app.listen(3000);

