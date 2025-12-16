const { getKYC } = require("../mock/crm");

exports.verifyKYC = (customerId) => {
  return getKYC(customerId);
};
 