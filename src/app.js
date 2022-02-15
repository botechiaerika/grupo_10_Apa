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
  res.sendFile(path.resolve(__dirname, "../views/productCard.html"));
});
app.get("/destaques", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/desaques.html"));
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
