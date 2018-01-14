var express = require('express'),
    app = express(),
    port = process.env.PORT || 8082,
    bodyParser = require('body-parser'),
    routes = require('./routes/appRoutes');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

/*app.get('/login', function(req, res) {
    var response = {
        "name": "Akshay Pathare",
        "countriesVisited": ["India", "South Africa"]
    }
    res.send("hellow world");
});
*/
app.listen(port);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});