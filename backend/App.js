const express = require('express');
const cors = require('cors');
const db = require('./database/db');
const controllers = require('./Controllers');


const app = express();  //se crea la aplicación de express

//permite enviar data del frontend al backend
app.use(cors());
//acceder a la informacion que contiene el body en las peticiones post o put
app.use(express.json());
//crear la ruta de nuestra apps
app.get('/user/:userId', controllers.getUsersById)
app.post('/register', controllers.register)
app.post('/login', controllers.login)


const port = 4000

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);   
    db();
});

module.exports = app;