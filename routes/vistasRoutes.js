const express = require('express');
const router = express.Router();

router.get('/principal', (req, res)=>{
    res.redirect('/principal.html')
});
router.get('/clientes', (req, res)=>{
    res.redirect('/clientes.html')
});
router.get('/RutasDeCobranza', (req, res)=>{
    res.redirect('/rutasCobranza.html')
});
router.get('/productos', (req, res)=>{
    res.redirect('/productos.html')
});
router.get('/estadisticas', (req, res)=>{
    res.redirect('/estadisticas.html')
});
router.get('/novedades', (req, res)=>{
    res.redirect('/novedades.html')
});
router.get('/calculadora', (req, res)=>{
    res.redirect('/calculadora.html')
});
router.get('/ventas', (req, res)=>{
    res.redirect('/ventas.html')
});
router.get('/usuarios', (req, res)=>{
    res.redirect('/usuarios.html')
});
router.get('/gastos', (req, res)=>{
    res.redirect('/gastos.html')
});
module.exports = router;