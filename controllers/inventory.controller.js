const Inventory = require("../models/inventory.model");
const Category = require("../models/category.model");
const SubCategory = require("../models/sub-category.model");
const jwt = require("jsonwebtoken");
let secretKey = "Secret";

const createInventory = async (req, res) => {
  try {
    let token;
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      token = bearer[1];
    }
    jwt.verify(token, secretKey, async (err, authData) => {
      if (err) {
        res.send({ message: "Invalid Seller" });
      } else {
        const category = await Category.findOne({ name: req.body.category });
        const subCategory = await SubCategory.findOne({name: req.body.sub_category});
        let existingCategory;
        let existingSubCategory;
        if (category) {
          existingCategory = category.name;
        } else {
          res.send({ message: "No Category Exist By This Name" });
        }
        if (subCategory) {
          existingSubCategory = subCategory.name;
        } else {
          res.send({ message: "No SubCategory Exist By This Name" });
        }
        const data = {
          category: existingCategory,
          sub_category: existingSubCategory,
          product:req.body.product,
          mrp: req.body.mrp,
          sp: req.body.sp,
          qty: req.body.qty,
        };
        const inventory = await Inventory.create(data);
        res.status(201).json(inventory);
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  createInventory,
};
