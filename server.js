// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservations = [
    {
      routeName: "",
      name: "",
      phone: "",
      email: "",
      uniqueId: null
    }
  ];

// Routes
// =============================================================
  app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/api/tables", function(req, res) {
      for (var i = 0; i<5; i++) {
        var table = table + reservations[i];
        return res.json(table);
      }
  });

  app.get("/api/waitlist", function(req, res) {
      for (var i = 5; i<tables.length; i++) {
        var waitList = waitList + reservations[i];
        return res.json(waitList);
      }
  });


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });






//Create a New Reservation 



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
