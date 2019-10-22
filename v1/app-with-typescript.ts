import * as express from "express";

//var express = require("express");
var app = express();

var port = 1884;
var IP = "localhost";

app.listen(port, function() {
  console.log("Movie App has started!!!");
});

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  var campgrounds = [
    {
      name: "Salmon Creek",
      image:
        "https://pixabay.com/get/52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c722e7ddc9f4fcd50_340.jpg"
    },
    {
      name: "Granite Hill",
      image:
        "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c722e7ddc9f4fcd50_340.jpg"
    },
    {
      name: "Mountain Goat's Rest",
      image:
        "https://pixabay.com/get/52e3d3404a55af14f6da8c7dda793f7f1636dfe2564c704c722e7ddc9f4fcd50_340.png"
    }
  ];
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("100", function(req: express.Request, res) {
  res.send();
});
