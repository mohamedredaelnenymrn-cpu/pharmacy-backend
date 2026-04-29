const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

connectDB();

// routes
app.use("/auth", require("./routes/auth"));
app.use("/sales", require("./routes/sales"));
app.use("/inventory", require("./routes/inventory"));
app.use("/purchase", require("./routes/purchase"));
app.use("/admin", require("./routes/admin"));

app.listen(3000, () => console.log("Server running"));