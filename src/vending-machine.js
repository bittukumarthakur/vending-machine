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

exports.dispenseCoin = dispenseCoin;
