const express = require("express");
const router = express.Router();

router.use("/seller", require("./seller/index"));

module.exports = router;
