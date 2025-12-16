const { customers } = require("./dummyDB");

exports.getKYC = (customerId) => {
  const customer = customers.find(c => c.customerId === customerId);

  if (!customer) return { status: "NOT_FOUND" };

  return {
    customerId,
    name: customer.name,
    pan: customer.pan,
    status: "VERIFIED"
  };
};
