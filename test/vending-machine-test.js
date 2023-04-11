const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const displayTitle = testing.displayTitle;
const assert = testing.assert;

assert(vendingMachine.dispenceOneRupees(1), 1, " 1 rupees note should be 1 coin.");
assert(vendingMachine.dispenceOneRupees(2), 2, " 1 rupees note should be 1 coin.");



