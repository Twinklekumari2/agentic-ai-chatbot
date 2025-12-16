const express = require("express");
const cors = require("cors");

const loanRoutes = require("./routes/loanRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/loan", loanRoutes);

app.listen(5000, () => {
  console.log("Mock Loan Backend running on port 5000");
});
