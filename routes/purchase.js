const router = require("express").Router();
const { purchase } = require("../controllers/purchaseController");

router.post("/", purchase);

module.exports = router;