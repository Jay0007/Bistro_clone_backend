// eslint-disable-next-line linebreak-style
const express = require('express');

const router = express.Router();
const Userdetails = require('../models/userdetails');
// a BETTER option
// module.exports = (Argument) =>{
//   router.get('/',(req,res)=>{
//     Can Use ARGUMENT
//     res.send(...)
//   })
//   return router
// }

router.get('/user/:id', (req, res) => {
  Userdetails.find()
    .sort({ createdAt: 1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post('/user/:id', (req, res) => {
  const userdetail = new Userdetails(req.body);
  userdetail
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

// // category: 'SOUTH INDIAN SPECIAL', item: 'Plain Idly'
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
