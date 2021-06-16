// eslint-disable-next-line linebreak-style
const express = require('express');

const router = express.Router();
const Menu = require('../models/menu');
// a BETTER option
// module.exports = (Argument) =>{
//   router.get('/',(req,res)=>{
//     Can Use ARGUMENT
//     res.send(...)
//   })
//   return router
// }

router.get('/menu', (req, res) => {
  Menu.find()
    .sort({ createdAt: 1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post('/menu/add', (req, res) => {
  const menu = new Menu(req.body);
  menu
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

// category: 'SOUTH INDIAN SPECIAL', item: 'Plain Idly'
router.get('/menu-specific', (req, res) => {
  Menu.find({ 'configure.sides.count': { $gte: 0.1 } }, { item: 1, 'configure.sides': 1 })
    .sort({ price: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get('/menu-update', (req, res) => {
  Menu.updateOne({ item: 'Dosa' }, { $set: { price: 8.0 } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
