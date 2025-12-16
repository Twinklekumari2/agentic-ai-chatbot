exports.generateSanctionLetter = (data) => {
  return {
    loanAmount: data.amount,
    tenure: data.tenure,
    interestRate: "10.5%",
    status: "APPROVED",
    sanctionId: "SAN" + Date.now()
  };
};
