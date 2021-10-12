console.log('hello node');

const express = require('express')
const app = express()

app.get('/', function (req, res) {
res.send('Welcome to ChillAppz')
})

app.listen(3000)