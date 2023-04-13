const findNumberOfCoins = function(amount, coinValue) {
  return Math.floor(amount / coinValue);
}

const max = function(list) {
  let currentmax = 0;
  for (const term of list) {
    if (term > currentmax) {
      currentmax = term;
    };
  };

  return currentmax;
}

const deleteElement = function(list, element) {
  const index = list.indexOf(element);
  const result = list.slice(0,index).concat(list.slice(index + 1));
  return result;
}

const sort = function(list) {
  let currentList = list.slice();
  let sortedList = [];

  for (let i = 0; i < list.length; i++) {
    const currentMax = max(currentList);
    sortedList.push(currentMax);
    currentList = deleteElement(currentList, currentMax);
  };

  return sortedList;
}

const dispenseCoin = function(amount, coinList) {
  const reversedCoinList = sort(coinList);
  let remainingAmount = amount;
  let numberOfCoins = 0;

  for (let coin of reversedCoinList) {
    numberOfCoins += findNumberOfCoins(remainingAmount, coin);
    remainingAmount = remainingAmount % coin;

    if (remainingAmount === 0 ) {
      return numberOfCoins;
    };
  };
}

const denominationBy = function(amount, coins) {
  const reversedCoinList = sort(coins);
  let remainingAmount = amount;
  let denominationTable = {};

  for (let coin of reversedCoinList) {
    const currentNumberOfCoins = findNumberOfCoins(remainingAmount, coin);
    remainingAmount = remainingAmount % coin;
    denominationTable[coin] = currentNumberOfCoins;
  };

  return denominationTable; 
}

exports.dispenseCoin = dispenseCoin;
exports.max = max;
exports.deleteElement = deleteElement;
exports.sort = sort;
exports.denominationBy = denominationBy;
