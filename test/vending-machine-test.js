const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const displayTitle = testing.displayTitle;
const assert = testing.assert;
const displaySummary = testing.displaySummary;
const dispenseCoin = vendingMachine.dispenseCoin;
const sortMax = vendingMachine.sortMax;
const deleteElement = vendingMachine.deleteElement;
const sort = vendingMachine.sort;

const vendingMachineTest = function() {
  displayTitle("testing for 1 rupee coin ")
  assert(dispenseCoin(1, [1]), 1, "For amount of 1, total coin should be 1." );
  assert(dispenseCoin(3, [1]), 3, "For amount of 3, total coin should be 3. (Amount is odd)" );
  assert(dispenseCoin(6, [1]), 6, "For amount of 6, total coin should be 6. (Amount is even)" );


  displayTitle("Upgraded for 2 rupee coin as well.")
  assert(dispenseCoin(2, [1, 2]), 1, "For amount of 2, total coin should be 1. (Only 2 rupee coin.)");
  assert(dispenseCoin(4, [1, 2]), 2, "For amount of 4, total coin should be 2. (Only 2 rupee coin.)");
  assert(dispenseCoin(3, [1, 2]), 2, "For amount of 3, total coin should be 2. (Both 1 and 2 rupee coin.)");

  displayTitle("Upgraded for 5 rupee coin as well.")
  assert(dispenseCoin(5, [1, 2, 5]), 1, "For amount of 5, total coin should be 1. (Only 5 rupee coin.)");
  assert(dispenseCoin(3, [1, 2, 5]), 2, "For amount of 3, total coin should be 2. (Excluding 5 rupee coin.)");
  assert(dispenseCoin(7, [1, 2, 5]), 2, "For amount of 7, total coin should be 2. (Including 5 and 2 rupee coin.)");
  assert(dispenseCoin(13, [1, 2, 5]), 4, "For amount of 13, total coin should be 2. (Including all coins.)");

  displayTitle("Upgraded for 10 rupee coin as well.")
  //  assert(dispenseCoin(10, [1, 2, 5, 10]), 1, "For amount of 10, total coin should be 1. (Only 10 rupee coin.)");
  // assert(dispenseCoin(15, [1, 2, 5, 10]), 2, "For amount of 15, total coin should be 2. (Including 10 and 5 rupee coin.)");
  assert(dispenseCoin(8, [1, 2, 5, 10]), 3, "For amount of 8, total coin should be 2. (Excluding 10 rupee coin.)");
  // assert(dispenseCoin(18, [1, 2, 5, 10]), 4, "For amount of 18, total coin should be 4. (Including all coin.)");

  displayTitle("Testing for coinset 1,4,7.");
  assert(dispenseCoin(13, [1, 4, 7]), 4, "For amount of 13, total coin should be 4.");

  displayTitle("Testing for unordered set of coin");
  //  assert(dispenseCoin(13, [4, 1, 7]), 4, "For amount of 13, total coin should be 4.");
}

vendingMachineTest();

displayTitle("Testing for sortmax.");
assert(sortMax([4, 1, 7]), 7, " Max is 7 in 4, 1, 7");
assert(sortMax([4, 15, 7]), 15, " Max is 15 in 4, 15, 7");

displayTitle("Testing for deleting element.");
assert(deleteElement([4, 1, 7], 7), [4, 1], " deleting 7 from [4, 7, 1], array should be [4, 1].");
assert(deleteElement([4, 1, 7, 9, 8], 1), [4, 7, 9, 8], " deleting 1 from [4, 1, 7, 9, 8], then array is [4, 7, 9, 8].");

displayTitle("Testing for sort.");
assert(sort([1, 2]), [2, 1], "[1,2] after short should be [2, 1].");
assert(sort([10, 2, 5]), [10, 5, 2], "[10, 2, 5]  after sort should be [10, 5, 2].");

displaySummary();
