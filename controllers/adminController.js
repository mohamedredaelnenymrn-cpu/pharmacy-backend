const Sale = require("../models/Sale");

exports.salesReport = async (req, res) => {
  const sales = await Sale.find();

  const totalSales = sales.length;
  const totalRevenue = sales.reduce((sum, s) => sum + s.total, 0);

  res.json({
    totalSales,
    totalRevenue,
    data: sales
  });
};