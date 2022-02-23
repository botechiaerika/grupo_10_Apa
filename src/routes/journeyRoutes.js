const express = require('express');
const rouer = express.Routter()

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes; * /

app.get('/', productController.index)
app.get('/home', productController.home)
app.get('/productos', productController.products)
app.get('/productos/detalleProducto', productController.productsDetails)

/*app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/home.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/login.html"));
});
app.get("/reservas", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/productCart.html"));
});
app.get("/destaques", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/productDetail.html"));
});
app.get("/productos", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/products.html"));
});
app.get("/sprint02", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/journey/sprint02.html"));
});
app.get("/user", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/user.html"));
});

app.use(express.static(path.resolve(__dirname, "../public/")));

app.listen(3030, () => {
    console.log("Servidor LEVANTADO");
});
``
`