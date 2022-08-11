const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost/personeria';


const db = async ()=>{
    await mongoose
    .connect(MONGO_URL)
    .then(()=> console.log("Conexión satisfactoria"))
    .catch((error) => console.error(error));
};

module.exports = db;




