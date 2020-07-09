var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT ||3000;

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

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
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