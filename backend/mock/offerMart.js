const { customers } = require("./dummyDB");

exports.getPreApprovedLimit = (customerId) => {
  const customer = customers.find(c => c.customerId === customerId);
  return { limit: customer ? customer.preApprovedLimit : 0 };
};
