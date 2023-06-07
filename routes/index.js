const express = require("express");
const router = express.Router();

router.use("/seller", require("./seller"));

module.exports = router;
