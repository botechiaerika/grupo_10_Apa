// var createError = require('http-errors');
const express = require('express');
const path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const port = process.env.PORT || 3030

const mainRouters = require('./routes/mainRoutes.js')
const productsRouters = require('./routes/productsRoutes.js')
    // const usuariosRouters = require('./routes/usuariosRoutes.js')
    //const usersRouters = require('./routes/usersControllers');
const app = express();
app.use(express.static(path.join(__dirname, './../public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// ACTUALIZANDO ENTRY POINT CLASSE CRUD
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', mainRouters)
app.use('/productos', productsRouters);
app.use('/*', (req, res) => { res.render('error404') })

app.listen(port, () => {
    console.log('server corriendo port 3030')
})

module.exports = app;