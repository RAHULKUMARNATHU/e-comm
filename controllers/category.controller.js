const Category = require("../models/category.model");
const jwt = require("jsonwebtoken");
let secretKey = "Secret";

const createCategory = async (req, res) => {
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
        const category = await Category.findOne({ name: req.body.name });
        if (!category) {
          const data = await Category.create(req.body);
          res.status(201).json(data);
        } else {
          res.send({ message: "Category By Same Name Already Exist" });
        }
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  createCategory,
};
