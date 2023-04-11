const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const displayTitle = testing.displayTitle;
const assert = testing.assert;

displayTitle("testing for 2 rupee coin ")
assert(vendingMachine.findNumberOfTwoRupeeCoins(2), 1, " number of coin should be 1 for amount 2.");
assert(vendingMachine.findNumberOfTwoRupeeCoins(3), 1, " number of coin should be 1 for amount 3.");
assert(vendingMachine.findNumberOfTwoRupeeCoins(6), 3, " number of coin should be 3 for amount 6.");
assert(vendingMachine.findNumberOfTwoRupeeCoins(9), 4, " number of coin should be 4 for amount 9.");


displayTitle("testing for 5 rupee coin ")
assert(vendingMachine.findNumberOfFiveRupeeCoins(5), 1, " number of coin should be 1 for amount 5.");
assert(vendingMachine.findNumberOfFiveRupeeCoins(2), 0, " number of coin should be 0 for amount 2.");
assert(vendingMachine.findNumberOfFiveRupeeCoins(10), 2, " number of coin should be 2 for amount 10.");
assert(vendingMachine.findNumberOfFiveRupeeCoins(13), 2, " number of coin should be 2 for amount 13.");

