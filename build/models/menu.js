"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var menuSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  total_price: {
    type: Number,
    "default": 0
  },
  count: {
    type: Number,
    "default": 0
  },
  configure: {
    sides: [{
      name: String,
      price: Number,
      count: {
        type: Number,
        "default": 0
      }
    }]
  }
});
var Menu = mongoose.model('menu', menuSchema);
module.exports = Menu;