"use strict";

// eslint-disable-next-line linebreak-style
var express = require('express');

var router = express.Router();

var Menu = require('../models/menu'); // a BETTER option
// module.exports = (Argument) =>{
//   router.get('/',(req,res)=>{
//     Can Use ARGUMENT
//     res.send(...)
//   })
//   return router
// }


router.get('/menu', function (req, res) {
  Menu.find().sort({
    createdAt: 1
  }).then(function (result) {
    res.send(result);
  })["catch"](function (err) {
    res.send(err);
  });
});
router.post('/menu/add', function (req, res) {
  var menu = new Menu(req.body);
  menu.save().then(function (result) {
    res.send(result);
  })["catch"](function (err) {
    res.send(err);
  });
}); // category: 'SOUTH INDIAN SPECIAL', item: 'Plain Idly'

router.get('/menu-specific', function (req, res) {
  Menu.find({
    'configure.sides.count': {
      $gte: 0.1
    }
  }, {
    item: 1,
    'configure.sides': 1
  }).sort({
    price: -1
  }).then(function (result) {
    res.send(result);
  })["catch"](function (err) {
    res.send(err);
  });
});
router.get('/menu-update', function (req, res) {
  Menu.updateOne({
    item: 'Dosa'
  }, {
    $set: {
      price: 8.0
    }
  }).then(function (result) {
    res.send(result);
  })["catch"](function (err) {
    res.send(err);
  });
});
module.exports = router;