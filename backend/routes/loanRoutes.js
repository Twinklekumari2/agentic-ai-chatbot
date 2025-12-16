const express = require("express");
const router = express.Router();

const salesAgent = require("../agent/salesAgent");
const verificationAgent = require("../agent/verificationAgent");
const creditAgent = require("../agent/creditAgent");
const underwritingAgent = require("../agent/underwritingAgent");
const sanctionAgent = require("../agent/sanctionAgent");

const { getPreApprovedLimit } = require("../mock/offerMart");

router.post("/apply", (req, res) => {
  const { customerId, salary, amount, tenure } = req.body;

  const salesData = salesAgent.captureRequirements(salary, amount, tenure);

  const kyc = verificationAgent.verifyKYC(customerId);

  if (kyc.status === "NOT_FOUND") {
     return res.json({ status: "REJECT", reason: "Customer not found" });
  }

  if (kyc.status !== "VERIFIED") {
     return res.json({ status: "REJECT", reason: "KYC Failed" });
  }

  const credit = creditAgent.fetchCreditScore(kyc.pan);

  const offer = getPreApprovedLimit(customerId);

  const decision = underwritingAgent.underwrite({
    salary: salesData.salary,
    amount: salesData.amount,
    creditScore: credit.score,
    preApproved: offer.limit
  });

  if (decision.status === "REJECT") {
    return res.json(decision);
  }

  if (decision.status === "CONDITIONAL_APPROVAL") {
    return res.json({
      status: "CONDITIONAL_APPROVAL",
      message: "Upload salary slip required"
    });
  }

  const sanction = sanctionAgent.generateSanctionLetter(salesData);

  res.json({
    status: "APPROVED",
    sanction
  });
});

module.exports = router;
