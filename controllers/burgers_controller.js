var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burgers/new", function(req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function() {
    res.redirect("/burgers");
  });
});

router.post("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  burger.updateOne({devoured: req.body.devoured}, condition, function() {
    res.redirect("/burgers");
  });
});

module.exports = router;