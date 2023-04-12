const findNumberOfCoins = function(amount, coinValue) {
  return Math.floor(amount / coinValue);
}

const dispenseCoin = function(amount, coinList) {
  const reversedCoinList = coinList.reverse();
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

const sortMax = function(list) {
  let  max = 0;
  for (const term of list) {
    if (term > max) {
      max = term;
    };
  }

  return max;
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
    const currentMax = sortMax(currentList);
    sortedList.push(currentMax);
    currentList = deleteElement(currentList, currentMax);
  }
  return sortedList;
}

exports.dispenseCoin = dispenseCoin;
exports.sortMax = sortMax;
exports.deleteElement = deleteElement;
exports.sort = sort;
