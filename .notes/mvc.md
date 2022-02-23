
# COLLECCION
1 router.js
1 controller.js
rutas 


RUTAS ANTERIORES

---
```Js
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/index.html"));
});
app.get("/home", (req, res) => {
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
});```



## APP.JS

RUTA GLOBAL - ABSOLUTA!
ROUTER

---
```
---
---
```markdown

const productsRoutes = require('productosRouter');
// IMPORTA RUTAS COLLECCION **PRODUCTS**
const clientRoutes = require('clientRouter');
// IMPORTA RUTAS COLLECCION **CLIENT**

app.use(express.static(path.resolve(__dirname, '...', '/public')));
app.use(express.static(path.resolve(__dirname, '...', '/views')))

app.listen(3030 , ()=>{
	console.log('WS LEVANTADO y ROUTER FUNCIONANDO EN PORT 3030)
});
```
---
---
```markdown
---

## ROUTER
- defino rutas luego de requerir  express
- 

## CONTROLLER

```
---