const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
    validarIngresoUsuario,
    crearUsuario
} = require('../controllers/usersControllers');


router.post('/crearUsers',[
    check('nombre').isLength({min:4}),
    check('dni').isLength({min:8}),
    check('password').isLength({min:6}),
], crearUsuario);

router.post('/', validarIngresoUsuario);

router.put('/:id', (req, res) =>{
    res.send('actualizamos un usuario');
});
router.delete('/:id', (req, res) =>{
    res.send('eliminamos un usuario');
});

module.exports = router;