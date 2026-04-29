const Medicine = require("../models/Medicine");

exports.updateStock = async (req, res) => {
  let med = await Medicine.findOne({ name: req.body.name });

  if (!med) {
    med = await Medicine.create(req.body);
  } else {
    med.quantity += req.body.quantity;
    await med.save();
  }

  res.json(med);
};