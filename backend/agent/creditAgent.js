const { getCreditScore } = require("../mock/creditBureau");

exports.fetchCreditScore = (pan) => {
  return getCreditScore(pan);
};
