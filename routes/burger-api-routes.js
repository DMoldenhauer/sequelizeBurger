var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Burger.findAll({
      
    }).then(function(data) {
        var hbsObjext = {
            burgers: data
          };
      res.render('index', hbsObjext);
    });
  });

  app.get("/api/newBurgers", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Burger.findAll({
      
    }).then(function(data) {
        var hbsObjext = {
            burgers: data
          };
      res.send(data);
    });
  });

  app.put("/api/burgers/:id", function(req, res) {
    console.log("The request:")
    console.log(req.body)
    console.log("**************************")
    db.Burger.update({
      devoured: true
    },
    { 
      where: {
        id: req.params.id,
      }
      
    }).then(function(data) {
      console.log(" data at app.put is: " + JSON.stringify(data));
      res.json(data);
      // res.redirect('/');
    });
  });

  app.post("/api/newBurgers", function(req, res) {
    console.log("The request:")
    console.log(req.body)
    console.log("**************************")
    db.Burger.create({burger_name: req.body.newBurger})
    
    .then(function(data) {
      console.log(" data at app.post is: " + JSON.stringify(data));
      res.json(data);
      // res.redirect("/");
    });
  });



};
