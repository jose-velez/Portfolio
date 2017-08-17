// Dependencies

var express = require("express");
var path = require("path");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");


var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//==================================
//            ROUTES
//==================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//================================
//              PORT
//================================

app.listen(PORT, function() {
  console.log(`App running on Port: ${PORT}`);
});
