// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
// new code:
var session = require('express-session');
// original code:

// more new code:
app.use(session({secret: 'codingdojorocks'}));  // string for encryption



app.get('/', function(req, res) {
 res.render("index");
})

app.post('/', function(req, res) {
 console.log("POST DATA", req.body);

 
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})
// post route for adding a user
app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);
 var info = {
      name :req.body.name,
      location:req.body.location,
      language: req.body.language,
      comment:req.body.comment
 }
 console.log(req.session.name)
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.render('result',{info: info});
})



// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
