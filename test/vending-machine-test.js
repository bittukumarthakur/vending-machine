const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const displayTitle = testing.displayTitle;
const assert = testing.assert;
const isArrayEqual = testing.isArrayEqual;
const assertArray = testing.assertArray;
const displaySummary = testing.displaySummary;
const dispenseCoin = vendingMachine.dispenseCoin;
const max = vendingMachine.max;
const deleteElement = vendingMachine.deleteElement;
const sort = vendingMachine.sort;
const dispenseCoinDetails = vendingMachine.dispenseCoinDetails;

const it = function(message, testData) {
  assert(testData.actual, testData.expected, message);
}

const dispenseCoinTest = function() {
  displayTitle("Testing for dispenseCoin. ");

  it("Should return undefined coin when no denominations are given.", {
    actual: dispenseCoin(1, []),
    expected: undefined 
  });

  it("Should return 0 coin when 0 amount is given.", {
    actual: dispenseCoin( 0, [ 1, 2 ]),
    expected: 0
  });

  it("Should return same amount when only one rupee coin denomination is given.", {
    actual: dispenseCoin( 1, [ 1, 2 ]),
    expected: 1
  });

  it("Should return one coin of each denomination, if amount is sum of the denomination.", {
    actual: dispenseCoin(8, [ 1, 2, 5]),
    expected: 3
  });

  it("Should return optimun number of coin for ordered set of denomination.", {
    actual: dispenseCoin(13, [ 1, 2, 5, 10]),
    expected: 3
  });

  it("Should return optimun number of coin for unordered set of denomination.", {
    actual: dispenseCoin(23, [ 5, 1, 10, 2]),
    expected: 4
  });
}

const sortTest = function() {
  displayTitle("Testing for max.");
  assertArray(max([4, 1, 7]), 7, " Max is 7 in 4, 1, 7");
  assertArray(max([4, 15, 7]), 15, " Max is 15 in 4, 15, 7");

  displayTitle("Testing for deleting element.");
  assertArray(deleteElement([ 4, 1, 7 ], 7), [ 4, 1 ], " deleting 7 from [4, 7, 1], array should be [4, 1].");
  assertArray(deleteElement([ 4, 1, 7, 9, ], 1), [ 4, 7, 9 ], " After deleting 1, it should be [4, 7, 9, 8].");

  displayTitle("Testing for sort.");
  assertArray(sort([1, 2]), [2, 1], "[1,2] after short should be [2, 1].");
  assertArray(sort([10, 2, 5]), [10, 5, 2], "[10, 2, 5] after sort should be [10, 5, 2].");

  displayTitle("Testing is array equal.");
  assert(isArrayEqual([1, 2], [1, 2]), true, " [1, 2] should be equal to [1, 2].")
}

const dispenseCoinDetailsTest = function() {
  displayTitle("Testing for coin[ 1, 2 ] by denomination and amount is 3.");
  let denominationTable = dispenseCoinDetails(3, [ 1, 2 ]);
  assert(denominationTable[1], 1, " 1 rupee coin should be 1.");
  assert(denominationTable[2], 1, " 2 rupee coin should be 1.");

  displayTitle("Testing for coin[ 1, 2, 5 ] by denomination and amount is 8.");
  denominationTable = dispenseCoinDetails(8, [ 1, 2, 5 ]);
  assert(denominationTable[1], 1, " 1 rupee coin should be 1.");
  assert(denominationTable[2], 1, " 2 rupee coin should be 1.");
  assert(denominationTable[5], 1, " 5 rupee coin should be 1.");

  displayTitle("Testing for coin[ 1, 2, 5, 10 ] by denomination and amount is 13.");
  denominationTable = dispenseCoinDetails(13, [ 1, 2, 5, 10 ]);
  assert(denominationTable[1], 1, " 1 rupee coin should be 1.");
  assert(denominationTable[2], 1, " 2 rupee coin should be 1.");
  assert(denominationTable[5], 0, " 5 rupee coin should be 0.");
  assert(denominationTable[10], 1, " 10 rupee coin should be 1.");
}

const runTest = function() {
  //  sortTest();
  dispenseCoinDetailsTest();
  dispenseCoinTest();
  displaySummary();
}

runTest();

