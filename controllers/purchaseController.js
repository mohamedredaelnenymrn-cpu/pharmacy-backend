const Supplier = require("../models/Supplier");
const Medicine = require("../models/Medicine");

exports.purchase = async (req, res) => {
  const supplier = await Supplier.findById(req.body.supplierId);

  if (!supplier) return res.send("Supplier not found");

  const med = await Medicine.create(req.body);

  res.json(med);
};