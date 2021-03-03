// ---- ESTE ES MI SERVIDOR ----
const express = require('express');
const bodyParser =require ('body-parser');

const app = express(); 
const {API_VERSION} = require('./config')


//Load routings

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configuracion de HEADER HTTP

//....


//Router basico
//...

module.exports = app;