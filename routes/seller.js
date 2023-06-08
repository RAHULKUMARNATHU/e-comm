const express = require("express");
const router = express.Router();
const sellerController = require("../controllers/seller.controller");

router.post("/signup" , sellerController.signUp);
router.post("/signin", sellerController.signIn);
// router.post("/findUSer" , sellerController.findUser );

module.exports = router;
