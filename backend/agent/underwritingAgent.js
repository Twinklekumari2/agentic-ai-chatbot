exports.underwrite = ({ salary, amount, creditScore, preApproved }) => {

  if (creditScore < 700) {
    return { status: "REJECT", reason: "Low Credit Score" };
  }

  if (amount <= preApproved) {
    return { status: "INSTANT_APPROVAL" };
  }

  if (amount > 2 * preApproved) {
    return { status: "REJECT", reason: "Amount exceeds eligibility" };
  }

  const emi = amount / 36;
  if (emi > salary * 0.5) {
    return { status: "REJECT", reason: "EMI exceeds 50% salary" };
  }

  return { status: "CONDITIONAL_APPROVAL" };
};
