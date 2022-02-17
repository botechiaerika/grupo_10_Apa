const express = require("express");
const app = express();
const path = require("path");

let nodemon = require("nodemon");
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
  res.sendFile(path.resolve(__dirname, "../views/productCard.html"));
});
app.get("/miCuenta", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/account.html"));
});
app.get("/sprint02", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/sprint02.html"));
});
app.use(express.static(path.resolve(__dirname, "../public/")));
app.listen(3030, () => {
  console.log("Servidor LEVANTADO");
});
