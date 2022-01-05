'use strict';

const HOSTNAME = '127.0.0.1';
const PORT = 3333;

const express = require('express'),
    es6Renderer = require('express-es6-template-engine');

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

const rootController = require('./routes/index');
const rangersController = require('./routes/rangers');

app.get('/', (req, res) => res.redirect('/index'));
app.use('/index', rootController);
app.use('/rangers', rangersController);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`)
});