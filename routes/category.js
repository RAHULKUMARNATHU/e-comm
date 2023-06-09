const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controller");

router.post("/create", categoryController.createCategory);

module.exports = router;
