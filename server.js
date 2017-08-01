
// Dependencies

var express = require("express");
var path = require("path");

var path    = require("path");



var app = express();

var PORT = process.env.PORT || 8080;

//app.use(express.static(__dirname + "/public"));


//==================================
//            ROUTES
//==================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});


//================================
//              PORT
//================================

app.listen(PORT, function(){
  console.log(`App running on Port: ${PORT}`);
});
