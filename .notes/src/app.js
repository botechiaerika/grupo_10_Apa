const express = require("express")
const port = process.env.PORT || 3030
const mainRouters = require("./routes/mainRoutes.js")
const productsRouters = require("./routes/productsRoutes.js")
const path = require("path")
const app = express()
app.use(express.static(path.join(__dirname, "./../public")))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use("/", mainRouters)
app.use("/productos", productsRouters)
app.listen(process.env.PORT || 3030, function()) {
    console.log("server corriendo port 3030")
}

module.exports = app;