
//DEPENDENCIES
//Load npm packages

var express = require("express");
var bodyParser = require("body-parser");

// Sets up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Require models for syncing
var db = require ("./models");

//handle data parsing
//  parse application/x-www-form-urlencoded
app.use(bodyParser.json());
//  parse application/json
app.use(bodyParser.urlencoded({ extended: true }));

//static directory 
app.use(express.static("public")); //put all js and css in there

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Routes
require("./routes/burger-api-routes.js")(app);
require("./routes/html-routes.js")(app);



// Syncs sequelize models and tarts the server to begin listening
// =============================================================

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});




// // Import routes and give the server access to them.
// var router = require("./controllers/burgers_controller.js");

// 




