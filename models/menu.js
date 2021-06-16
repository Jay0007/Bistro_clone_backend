const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  total_price: {
    type: Number,
    default: 0,
  },
  count: {
    type: Number,
    default: 0,
  },
  configure: {
    sides: [
      {
        name: String,
        price: Number,
        count: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
});

const Menu = mongoose.model('menu', menuSchema);

module.exports = Menu;
