const express = require('express');
const router = express.Router();
const crearCliente = require('../controllers/clientControllers');

router.get('/', (req, res) => {
   res.send('lista de clientes');
});
router.post('/crearCliente', crearCliente);


module.exports = router;