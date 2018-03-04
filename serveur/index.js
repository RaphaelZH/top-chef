var michelin = require('./michelin');
var laFourchette = require('./laFourchette');
var express = require('express');
const app = express();

var json = michelin.get();

app.get('/', function (req, res) {
    res.send('/restaurant for retrieving restaurant data <br /> /offer/id for retrieving promotion');
});

app.get('/restaurant', function (req, res) {
    res.send(json);
})

app.get('/restaurant/:id', function (req, res) {
    res.send(json.restaurants[req.params.id]);
})

app.get('/offer/:id', function (req,res) {
    laFourchette.get(json.restaurants[req.params.id],function(result) {
        res.send(result);
    });
})

app.listen(3000, function () {
    console.log('Server running on port 3000');
})
