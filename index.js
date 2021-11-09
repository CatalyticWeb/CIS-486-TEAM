const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

app.get('/', function(req, res) {

    //res.send('<h3>Hello Node on Heroku</h3>');
    res.sendFile('/angular.html', { root: __dirname });


});

/*app.get('/user', function(req, res) {

    res.sendFile('/user.JSON', { root: __dirname });

});*/


app.get('/about', function(req, res) {

    res.sendFile('/README.md', { root: __dirname });

});

app.get('/data', function(req, res) {

    fs.readFile('chillData.json', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

    fs.appendFile('chillData.json', '{"Chilling out nice!": 1}', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });


});

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port 3000');
});