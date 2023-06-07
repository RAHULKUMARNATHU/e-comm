const express = require("express")
const router = express.Router();
const sellerController = require('../../controllers/seller.controller');

router.get('/get',sellerController.getSeller);


module.exports =router
