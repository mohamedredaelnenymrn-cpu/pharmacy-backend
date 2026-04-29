const router = require("express").Router();
const { updateStock } = require("../controllers/inventoryController");
const Medicine = require("../models/Medicine");

// ADD (POST)
router.post("/", updateStock);

// GET ALL MEDICINES
router.get("/", async (req, res) => {
  try {
    const meds = await Medicine.find();
    res.json(meds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;