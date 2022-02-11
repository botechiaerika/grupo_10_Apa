const express = require('express')
const app = express()
const port = 3030
const path = require('path')
const resolve = resolve()
app.use(express.static('/public'))

app.listen(port, () => {
    app.get('/', (req, res) => {
        res.sendFile(path(__dirname, '../views/index.html'))
    });
    app.get('/public', (req, res) => {
        res.sendFile(path.resolve(__dirname, '/public/'))
    });

    console.log('express')
})