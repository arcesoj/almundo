var express = require('express'),
app = express(),
cors = require('cors')
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Hotel = require('./api/models/hotelModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://almundo:test@ds023932.mlab.com:23932/almundodb');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/hotelRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Hotel list RESTful API server started on: ' + port);
