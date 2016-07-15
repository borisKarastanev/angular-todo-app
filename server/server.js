/**
 * Created by boris on 7/15/16.
 */


// Node core modules
var path = require('path');

// Express modules
var express = require('express');
var bodyparser = require('body-parser');
var app = express();


app.use(express.static(path.join(process.cwd(), 'public')));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get('/home', function (req, res) {
    res.sendFile(path.join(process.cwd(), 'public','home.html'));
});

app.listen(3000);


