const path = require('path'); 
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Carregar Rotas
const index_route = require('./routes/index');
const user_route = require('./routes/user');
// Usar Rotas
app.use('/', index_route);
app.use('/user', user_route);

module.exports = app;