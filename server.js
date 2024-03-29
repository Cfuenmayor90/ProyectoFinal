const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const hbs = require('hbs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
dotenv.config();
require('./dataBase/conexion');

const usersRoutes = require('./routes/usersRoutes');
const cobranzaRoutes = require('./routes/cobranzaRoutes');
const productsRoutes = require('./routes/productsRoutes');
const ventasRoutes = require('./routes/ventasRoutes');
const vistasRoutes = require('./routes/vistasRoutes');
const clientRoutes = require('./routes/clientRoutes');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
 app.use(express.static(path.join(__dirname, 'public')));
 app.set('view engine', 'hbs');
 app.set('views', path.join(__dirname, '/views'));
 app.use(cookieParser());
 hbs.registerPartials(path.join(__dirname, '/views/partials'));

 app.use('/users', usersRoutes);
 app.use('/cobranza', cobranzaRoutes);
 app.use('/products', productsRoutes);
 app.use('/ventas', ventasRoutes);
 app.use('/vistas', vistasRoutes);
 app.use('/client', clientRoutes);

 app.get('/', (req, res) => {
   res.render('index');
 })


app.listen(PORT, (req, res) => {
    console.log("servidor corriendo en el puerto" + PORT);
});