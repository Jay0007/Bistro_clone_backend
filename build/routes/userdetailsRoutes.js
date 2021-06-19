"use strict";

// eslint-disable-next-line linebreak-style
var express = require('express');

var router = express.Router();

var Userdetails = require('../models/userdetails'); // a BETTER option
// module.exports = (Argument) =>{
//   router.get('/',(req,res)=>{
//     Can Use ARGUMENT
//     res.send(...)
//   })
//   return router
// }


router.get('/getuserdetails', function (req, res) {
  Userdetails.findOne({
    email: req.query.email
  }).then(function (result) {
    res.send(result);
  })["catch"](function (err) {
    res.send(err);
  });
});
router.post('/userdetails', function (req, res) {
  var userdetail = new Userdetails(req.body);
  userdetail.save().then(function (result) {
    res.send(result);
  })["catch"](function (err) {
    res.send(err);
  });
});
router.put('/updateuserdetails', function (req, res) {
  Userdetails.updateOne({
    email: req.body.email
  }, {
    $set: {
      name: req.body.name,
      promotionreceive: req.body.promotionreceive,
      mobile: req.body.mobile,
      cardpay: req.body.cardpay
    }
  }).then(function (result) {
    res.send(result);
  })["catch"](function (err) {
    res.send(err);
  });
}); // // category: 'SOUTH INDIAN SPECIAL', item: 'Plain Idly'
// router.get('/menu-specific', (req, res) => {
//   Menu.find({ 'configure.sides.count': { $gte: 0.1 } }, { item: 1, 'configure.sides': 1 })
//     .sort({ price: -1 })
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
// router.get('/menu-update', (req, res) => {
//   Menu.updateOne({ item: 'Dosa' }, { $set: { price: 8.0 } })
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

module.exports = router;