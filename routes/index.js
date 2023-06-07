const express = require("express");
const router = express.Router();

router.use("/seller", require("./seller"));
router.use("/store" ,require("./store"))

module.exports = router;
