// configurar express 

const express = require('express');
const cors = require('cors'); // permite conectar el backend con el frontend
const helmet = require('helmet'); // seguridad para las cabeceras HTTP

// inicializamos la app 
const app = express();

// rutas 
const routes = require('./routes');
app.use('/api', routes);

//middlewares para leeer json(APIS)
app.use(express.json());
app.use(cors()); // seguridad basica 
app.use(helmet());

//ruta de prueba 
app.use(express.json());
app.get('/', (req, res) => {
    res.send('API funcionando');
});

module.exports = app;
