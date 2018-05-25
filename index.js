const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars'),
    fs = require('fs');

var app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(6060, () => console.log('Example app listening on port 6060!'));

app.get("/", function (req, res) {

    var folder = fs.readdirSync('db');
    folder.shift();
    res.render('index', {
        folder: folder
    });
});

app.get('/contar/:id', function (req, res) {
    var dataFile = fs.readFileSync('../restrepo_sebastian_parcial2/db/' + req.params.id);
    var dataText = String(dataFile);
    res.render('index', {
        db: req.params.id,
        data: dataText,
    });
});