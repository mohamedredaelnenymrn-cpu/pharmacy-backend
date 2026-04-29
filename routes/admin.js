const router = require("express").Router();
const { salesReport } = require("../controllers/adminController");

router.get("/sales", salesReport);

module.exports = router;