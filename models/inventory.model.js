const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  sp: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  }
});

// TELLING MONGOOSE THAT IT IS A MODEL
const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
