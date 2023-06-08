const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  business_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirm_password: {
    type: String,
    required: false,
  }
});

// TELLING MONGOOSE THAT IT IS A MODEL
const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
