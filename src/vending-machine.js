const sort = require("../lib/bubble-sort.js");
const bubbleSort = sort.bubbleSort;

const findNumberOfCoins = function(amount, coinValue) {
  return Math.floor(amount / coinValue);
}

const dispenseCoin = function(amount, coins) {
  const sortedCoins = bubbleSort(coins);
  let remainingAmount = amount;
  let numberOfCoins = 0;

  for (let coin of sortedCoins) {
    numberOfCoins += findNumberOfCoins(remainingAmount, coin);
    remainingAmount = remainingAmount % coin;

    if (remainingAmount === 0 ) {
      return numberOfCoins;
    };
  };
}

const dispenseCoinDetails = function(amount, coins) {
  const reversedCoinList = bubbleSort(coins);
  let remainingAmount = amount;
  let coinsDetail = {};

  for (let coin of reversedCoinList) {
    const currentNumberOfCoins = findNumberOfCoins(remainingAmount, coin);
    remainingAmount = remainingAmount % coin;
    coinsDetail[coin] = currentNumberOfCoins;
  };

  return coinsDetail; 
}

exports.dispenseCoin = dispenseCoin;
exports.dispenseCoinDetails = dispenseCoinDetails;
