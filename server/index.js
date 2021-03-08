
const express = require('express');
const bodyParser =require ('body-parser');
const mongoose =require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// crear el servidor
const app = express();

// Habilitar Cors
app.use(cors());


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Conectar con Mongo

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tienda-online', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', () => {
  console.log('Conexion a BBDD correcta');

});


//Router no está funcioonando bien, dejo este de prueba:

// app.get('/', function(req, res) {
//     console.log("Se ha realizado una petición GET para / ");
//     res.send('Página de listado de usuarios');

// });
//...

app.use('/', routes())
app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto 4000')
})




