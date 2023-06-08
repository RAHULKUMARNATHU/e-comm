const Seller = require("../models/seller.model");
const jwt = require("jsonwebtoken");
const secretKey = "Secret";

//1. Seller SignUp
const signUp = async (req, res) => {
  try {
    let seller = await Seller.create(req.body);
    res.status(200).send(seller);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//2. Login
const signIn = async (req, res) => {
  try {
    const user = req.body;
    jwt.sign({ user }, secretKey, { expiresIn: "1d" }, (error, token) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res.status(200).json({ token });
    });
  } catch (error) {
    throw error;
  }
};

const findUser = async (req, res) => {
  const isUser = await Seller.findOne({ email: req.body.email });
  return res.send(isUser);
};
module.exports = {
  signUp,
  signIn,
  findUser,
};
