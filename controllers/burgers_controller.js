const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");


router.get('/', function (req, res) {
    res.send('');
  })
  
  
  router.post('/about', function (req, res) {
    res.send('');
  })
  
  module.exports = router;