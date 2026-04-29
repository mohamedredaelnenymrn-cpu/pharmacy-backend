const router = require("express").Router();
const { makeSale } = require("../controllers/salesController");

router.post("/", makeSale);

module.exports = router;