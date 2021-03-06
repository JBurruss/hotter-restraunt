// Dependencies
// =============================================================
var tables = require("./table.js");
//var waitlist = require("./waitlist.js");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var express = require("express");
var app = express();
var PORT = 8000;
console.log("hello!!");

//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars reservations (DATA)
// =============================================================


//// Routes
//// =============================================================

app.get("/api/table", function(req, res) {
    console.log("route hit")
  res.json(tables)
});

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("working!")
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
  console.log("working!")
});

app.get("/reserv", function(req, res) {
  res.sendFile(path.join(__dirname, "reserv.html"));
  console.log("working!")
});

app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("working!")
});

// Create New Reservation - takes in JSON input
app.post("/api/new", function(req, res) {
  var newreservation = req.body;
  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservation);

  reservation.push(newreservation);

  res.json(newreservation);
});





app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});