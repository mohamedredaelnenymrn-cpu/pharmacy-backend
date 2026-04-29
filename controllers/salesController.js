const Medicine = require("../models/Medicine");
const Sale = require("../models/Sale");

exports.makeSale = async (req, res) => {
  const { id, qty } = req.body;

  const med = await Medicine.findById(id);

  if (!med || med.quantity < qty) {
    return res.send("Out of stock");
  }

  const total = med.price * qty;

  med.quantity -= qty;
  await med.save();

  const sale = await Sale.create({
    medicineId: id,
    quantity: qty,
    total
  });

  res.json({
    message: "Sale done",
    sale
  });
};