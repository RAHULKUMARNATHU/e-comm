const express = require("express");
const router = express.Router();

router.use("/seller", require("./seller"));
router.use("/store" ,require("./store"))
router.use("/category", require("./category"));
router.use("/inventory", require("./inventory"));
router.use("/subcategory", require("./sub-category"));

module.exports = router;
