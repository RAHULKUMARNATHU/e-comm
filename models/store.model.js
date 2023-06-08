const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    required: true,
  },
  gst: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
  },
  open: {
    type: Date,
    required: true,
  },
  close: {
    type: Date,
    required: true,
  },
});
const Store  = mongoose.model("Store", storeSchema);
module.exports = Store;
