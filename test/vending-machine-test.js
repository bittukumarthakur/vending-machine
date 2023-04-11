const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const displayTitle = testing.displayTitle;
const assert = testing.assert;

assert(vendingMachine.findNumberOfTwoRupeeCoin(2), 1, " number of coin should be 1 for amount 2.");
assert(vendingMachine.findNumberOfTwoRupeeCoin(3), 1, " number of coin should be 1 for amount 3.");
assert(vendingMachine.findNumberOfTwoRupeeCoin(6), 3, " number of coin should be 3 for amount 6.");
assert(vendingMachine.findNumberOfTwoRupeeCoin(9), 4, " number of coin should be 4 for amount 9.");



