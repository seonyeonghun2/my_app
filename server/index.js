const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/home.html");
});

app.listen(3000);