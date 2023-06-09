const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventory.controller");

router.post("/create", inventoryController.createInventory);

module.exports = router;
