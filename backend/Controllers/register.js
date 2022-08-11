const bcrypt = require('bcrypt'); //encriptar la contraseña
const Usuario = require('../models/usuario'); //requerir el modelo

const register = async (req, res)=> {
    const {username,email,password} = req.body; //obtenemos los datos del body
    //buscamos el email y obtenemos el usuario
    Usuario.findOne({email}).then((usuario) => {
        if(usuario){
            return res.json({mensaje:"Ya existe un usuario con ese email"});
        }else if(!username|| !email || !password) {
            return res.json({mensaje: "Falta el nombre o el email o el password"});
        }else {
            //hasiamos la contraseña para encryptarla
            bcrypt.hash(password, 10, (error, passwordHasheado)=>{
                if(error) res.json({error})
                else {
                    const nuevoUsuario = new Usuario({
                        username,
                        email,
                        password:passwordHasheado,
                    });

                    nuevoUsuario.save()
                    .then((usuario)=>{
                        res.json({mensaje : "Usuario creado correctamente", usuario});
                    })
                    .catch(error => console.error(error));
                }
            });
        }
    }); 


}

module.exports = register;