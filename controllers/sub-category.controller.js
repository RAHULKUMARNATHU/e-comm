const SubCategory = require("../models/sub-category.model");
const jwt = require("jsonwebtoken");
let secretKey = "Secret";

const createSubCategory = async (req, res) => {
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
        const subCategory = await SubCategory.findOne({ name: req.body.name });
        if (!subCategory) {
          const data = await SubCategory.create(req.body);
          res.status(201).json(data);
        } else {
          res.send({ message: "SubCategory By Same Name Already Exist" });
        }
      }
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  createSubCategory,
};
