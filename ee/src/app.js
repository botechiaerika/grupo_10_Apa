const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'))

const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'))
});
app.get('/public', (req, res) => {
    app.use(express.static(path.resolve(__dirname, '/public')))
});

app.listen(3090, () => {
    console.log('WS 3090')
})