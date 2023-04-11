const findNumberOfCoins = function(amount, coinValue) {
  return Math.floor(amount / coinValue);
}

const findNumberOfOneRupeeCoins= function(amount) {
  return amount;
}

const findNumberOfTwoRupeeCoins= function(amount) {
  return findNumberOfCoins(amount, 2);
}

const findNumberOfFiveRupeeCoins= function(amount) {
  return findNumberOfCoins(amount, 5);
}

const findNumberOfTenRupeeCoins= function(amount) {
  return Math.floor(amount / 10);
}

const dispenseOptimumNumberOfCoin = function(amount) {
  const numberOfCoin = 0;
  let remainingAmount = amount;
  numberOfCoin += findNumberOfTwoRupeeCoins(remainingAmount);


}

exports.findNumberOfOneRupeeCoins = findNumberOfOneRupeeCoins;
exports.findNumberOfTwoRupeeCoins = findNumberOfTwoRupeeCoins;
exports.findNumberOfFiveRupeeCoins = findNumberOfFiveRupeeCoins;
exports.findNumberOfTenRupeeCoins = findNumberOfTenRupeeCoins;
