const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

app.get('/', function(req, res) {

    //res.send('<h3>Hello Node on Heroku</h3>');
    res.sendFile('/angular.html', { root: __dirname });


});

app.get('/chill', function(req, res) {

    res.sendFile('/chillData.JSON', { root: __dirname });

});


app.get('/about', function(req, res) {

    res.sendFile('/README.md', { root: __dirname });

});

app.get('/audio', function(req, res) {

    res.sendFile('/audio/timerEnd.mp3', { root: __dirname });

});

app.get('/check', function(req, res) {

    res.sendFile('/chillData.json', { root: __dirname });

});

app.get('/data', function(req, res) {

    fs.writeFile('chillData.json', '{"material":"aluminum",\n"quantity":"single",\n"startTemp":"warm",\n"endTemp":"cold"}', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
    
    /*fs.readFile('chillData.json', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });*/
    res.sendFile('/cooltimer.html', { root: __dirname });

});

app.get('/data1', function(req, res) {

    fs.writeFile('chillData.json', '{"material":"aluminum",\n"quantity":"single",\n"startTemp":"warm",\n"endTemp":"cold"}', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
    
    /*fs.readFile('chillData.json', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });*/
    res.sendFile('/coldtimer.html', { root: __dirname });

});

app.get('/data2', function(req, res) {

    fs.writeFile('chillData.json', '{"material":"aluminum",\n"quantity":"single",\n"startTemp":"warm",\n"endTemp":"cold"}', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
    
    /*fs.readFile('chillData.json', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });*/
    res.sendFile('/frozentimer.html', { root: __dirname });

});

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port 3000');
});
