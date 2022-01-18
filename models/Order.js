const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {type: String},
        quantity: {type: Number, default: 1}
      }
    ],
  },
  {timestamps: true}
);

module.exports = mongoose.model('Order', OrderSchema)