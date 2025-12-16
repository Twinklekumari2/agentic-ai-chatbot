const { customers } = require("./dummyDB");

exports.getCreditScore = (pan) => {
  const customer = customers.find(c => c.pan === pan);
  return { score: customer ? customer.creditScore : 0 };
};
