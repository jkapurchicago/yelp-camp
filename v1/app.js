var express = require("express");
var app = express();

var port = 1884;
var IP = "localhost";

app.listen(port, function() {
  console.log("Movie App has started!!!");
});
/*
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});
*/
app.get(100, function(req, res) {
  res.send("this will be the landing page soon!!!");
});
