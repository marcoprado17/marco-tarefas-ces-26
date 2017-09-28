var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser')
var path = require('path');
var sleep = require('sleep');
var cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
  console.log("Got a GET request for the homepage");
  var n_reqs = req.cookies.n_reqs;
  if (n_reqs === undefined){
    res.cookie('n_reqs',1, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
    n_reqs = 1
  }
  else{
    res.cookie('n_reqs', parseInt(n_reqs)+1, { maxAge: 900000, httpOnly: true });
  }
  fs.readFile('all_texts.txt', function(err, data) {
    console.log("data: " + data);
    res.render("index", {all_texts: data, n_reqs: n_reqs});
  });
});

// This responds a POST request for the homepage
app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  console.log(req.body.text);
  fs.appendFile('all_texts.txt', '\n' + req.body.text, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  res.redirect('/');
});

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});
