const bcrypt = require('bcrypt'); //encriptar la contraseña
const Usuario = require('../models/usuario'); //requerir el modelo

const login = async (req, res)=> {
    const {email, password} = req.body;

    Usuario.findOne({email}).then((usuario)=>{
        if(!usuario){
            return res.json({mensaje:"Usuario no encontrado"});
        }
        //comparamos la contraseña que recibimos del body con la 
        //contraseña de la base de datos
        bcrypt.compare(password, usuario.password).then((esCorrecta)=>{
            if(esCorrecta){
                const {id,username} = usuario;
                res.json({mensaje: "Usuario logeado correctamente", 
                usuario : {
                    id,
                    username,
                }
            });
            }else {
                res.json({mensaje:"Contraseña incorrecta"});
            }
        })
    })
}

module.exports = login;