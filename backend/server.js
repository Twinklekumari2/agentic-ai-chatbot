const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const loanRoutes = require("./routes/loanRoutes");
app.use("/api/loan", loanRoutes);

app.listen(5000, () => {
  console.log("Mock Loan Backend running on port 5000");
});
