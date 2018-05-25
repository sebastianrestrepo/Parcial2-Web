const express = require('express'),
consolidate = require('consolidate'),
hbs = require('handlebars');

var app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(6060, () => console.log('Example app listening on port 6060!'));

app.get("/", function (req, res) {
    res.render('index');
});
