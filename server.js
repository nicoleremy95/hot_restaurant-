// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var waitlist = [];
var tables = [];
/*var reservations = [
    {
      routeName: "",
      name: "",
      phone: "",
      email: "",
      uniqueId: ""
    }
  ];*/

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
      //for (var i = 0; i<5; i++) {
       // var table = table + JSON.stringify(reservations[i]);
        
      return res.json(tables);
  });

  app.get("/api/waitlist", function(req, res) {
      //for (var i = 5; i<reservations.length; i++) {
        //var waitList = waitList + JSON.stringify(reservations[i]);
        
      return res.json(waitList);
  });

//Create a New Reservation 
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var reservations = req.body;

 // for (var i = 0; i<reservations.length; i++){
    if (tables.length<5){
      tables.push(reservations)
      res.json(tables);
    } else {
      waitlist.push(reservations)
      res.json(waitlist);
    }
 // }
  
  console.log(tables);
  console.log(waitList);

   
   
   //res.json(newTable);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
