const users = require("../models/userModels");
const { validationResult } = require("express-validator");


const crearUsuario = async (req, res) => {
   const errores = validationResult(req);
   if (!errores.isEmpty()) {
      console.log("Tenemos errores de validacion");
    return res.send("<h1>Error en los datos ingresados</h1>");
  }

  const { nombre, dni, password, rol } = req.body;

  try {
    let usuarioNuevo = await users.findOne({ dni });
    if (usuarioNuevo) {
       return res.send("<h1>El Usuario ya existe</h1>");
    }
    //creamos el usuario en la base de datos
    usuarioNuevo = new users(req.body);
    console.log(usuarioNuevo);
    await usuarioNuevo.save();
    res.send('<h1>Usuario Guardado con exito</h1>');

  } catch (error) {
     return res.send("<h1>Error en la Data Base</h1>");
  }
};

const validarIngresoUsuario = async (req, res) => {
  const { dni, password } = req.body;

  try {
     let userIngreso = await users.findOne({dni});
     if (password == userIngreso.password) {
         res.redirect('/principal.html');
     } else {
      res.send('password incorrecto');
     }
  } catch (error) {
   res.send('El usuario no existe');
  }

}


module.exports = {
  validarIngresoUsuario,
  crearUsuario,
};
