const Usuario = require("../models/usuario");

const getUserById = async (req, res) => {
  const { userId } = req.params;
//los id creados por mongo son de 24 caracteres
  if (userId.length  === 24) {
    Usuario.findById(userId).then((usuario) => {
      if (!usuario) {
        return res.json({
          mensaje: "No se encontro ningun usuario con ese ID",
        });
      } else {
        const { _id, password, __v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "Estas enviando una contraseña incorrecta" });
  }
};

module.exports = getUserById;