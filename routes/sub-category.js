const express = require("express");
const router = express.Router();
const SubCategoryController = require("../controllers/sub-category.controller");

router.post("/create", SubCategoryController.createSubCategory);

module.exports = router;
