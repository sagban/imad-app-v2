var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/index.html'));
});

app.get('/css/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/css/styles.css'));
});

app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/css/bootstrap.min.css'));
});

app.get('/js/markerwithlabel_packed.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/js/markerwithlabel_packed.js'));
});

app.get('/js/jquery-1.11.3.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/js/jquery-1.11.3.min.js'));
});

app.get('/js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/js/bootstrap.min.js'));
});

app.get('/js/underscore-min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/js/underscore-min.js'));
});

app.get('/js/typeahead.jquery.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/js/typeahead.jquery.min.js'));
});
app.get('/js/scripts.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/js/scripts.js'));
});
app.get('/search.php', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/search.php'));
});

app.get('/articles.php', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/articles.php'));
});

app.get('/update.php', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public', '/update.php'));
});

app.get('/../includes/config.php', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/includes', '/config.php'));
});

app.get('/../config.json', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/public/img', '/icon31.png'));
});

app.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyAncTp6i5N9PWCGCnbvFzKue6dcZG6vW-w', function (req, res) {
  res.sendFile(path.join('https://maps.googleapis.com/maps/api/js?key=AIzaSyAncTp6i5N9PWCGCnbvFzKue6dcZG6vW-w'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
