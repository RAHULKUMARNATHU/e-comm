const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  category_id: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// TELLING MONGOOSE THAT IT IS A MODEL
const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;
