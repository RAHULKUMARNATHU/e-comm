const Seller = require("../models/seller.model");
const jwt = require("jsonwebtoken");
const secretKey = "Secret";
const securePassword = require("./middleware/bcrypt");

//1. Seller SignUp
const signUp = async (req, res) => {
  if (req.body.password === req.body.confirm_password) {
    const hashedPassword = await securePassword.hashPassword(req.body.password);
    try {
      let data = {
        email: req.body.email,
        business_name: req.body.business_name,
        password: hashedPassword,
        confirm_password: hashedPassword,
      };
      let seller = await Seller.create(data);
      res.status(200).send(seller);
    } catch (err) {
      res.status(500).send(err.message);
    }
  } else {
    res.json({ message: "Password Not Matched" });
  }
};

// //2. Login
const signIn = async (req, res) => {
  try {
    const isSellerExist = await Seller.findOne({ email: req.body.email });
    const verifyPassword = await securePassword.verifyPassword(req.body)
    if (!isSellerExist || !verifyPassword) {
      res.json("Invalid Username Or Password"); 
    } else {
      const seller = req.body;
      jwt.sign({ seller }, secretKey, { expiresIn: "1d" }, (error, token) => {
        if (error) {
          res.status(500).json(error.message);
        }
        res.status(200).json({ token });
      });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  signUp,
  signIn,
};
