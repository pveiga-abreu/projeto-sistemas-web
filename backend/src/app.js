const path = require('path'); 
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

global.public = path.join(__dirname, "public");
app.use("/portal/public", express.static(global.public));



// Carregar Rotas
const user_route = require('./routes/user');


// Usar Rotas
app.use('/user', user_route);


app.listen(3003);
console.log("API ONLINE");
module.exports = app;
