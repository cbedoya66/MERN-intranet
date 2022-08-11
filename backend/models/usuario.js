//crear el modelo del usuario
const {model, Schema} = require('mongoose');

const UsuarioSchema = new Schema({
    username : {type: String, required: true},
    email : {type: String, required : true, unique:true},
    password : {type: String, required:true},
});

module.exports = model("usuario", UsuarioSchema);