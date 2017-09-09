var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 80;
var serverUrl   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || 'localhost';
console.log("Starting web server at " + serverUrl + ":" + port);

var app = express();

app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
   
app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html'); 
});
app.use(require('./controllers'));
app.use('/static',express.static(__dirname + '/public'));

app.listen(port);


