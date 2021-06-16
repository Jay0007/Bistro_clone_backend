const mongoose = require('mongoose');

const { Schema } = mongoose;

const userDetailsSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  payment: {
    type: String,
    enum: ['cash on delivery', 'credit/debit card'],
  },
  promotions: {
    type: Boolean,
    default: false,
  },
  previousorders: {
    orders: [
      {
        _id: String,
        category: String,
        item: String,
        description: String,
        price: Number,
        total_price: Number,
        count: Number,
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
      },
    ],
  },
});

const Userdetails = mongoose.model('userdetail', userDetailsSchema);

module.exports = Userdetails;
