import * as express from "express";
var faker = require("faker");
//var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

var port = 1884;
var IP = "localhost";

app.listen(port, function() {
  console.log("Movie App has started!!!");
});

app.set("view engine", "ejs");

const campgrounds = [];
let x = 0;

do {
  const campgound = {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    image: faker.image.avatar()
  };
  campgrounds.push(campgound);
  x = x + 1;
} while (x < 300);

//array for campgrounds
// var campgrounds = [
//   {
//     name: "Creek",
//     import: "https://yelp-camp-images.s3.amazonaws.com/wolves.jpeg"
//   },
//   {
//     name: "Granite Hill",
//     import: "https://yelp-camp-images.s3.amazonaws.com/wolves.jpeg"
//   },
//   {
//     name: "Mountain Goat's Rest",
//     import: "https://yelp-camp-images.s3.amazonaws.com/winterTravels+.jpeg"
//   },
//   {
//     name: "Yosmeite National Park",
//     image: "https://yelp-camp-images.s3.amazonaws.com/wolves.jpeg"
//   }
// ];

//GET routes
app.get("/", function(req, res) {
  res.render("landing");
});

//Shows us all the campgrounds
app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/100", function(req: express.Request, res) {
  res.send("This is the one 100 route");
});

//DO the logic of making new campgrounds and redirecting to /campgrounds
app.post("/campgrounds", function(req, res) {
  res.send("You hit the POST route!");
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  //get data to from form and add to campgrounds array
  //redirect back to campgrounds page
  res.redirect("/campgrounds");
});

//shows the form - submits post request to /campgrounds, redi
app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});
function newFunction() {
  return "./images/scenery.jpeg";
}
