const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const displayTitle = testing.displayTitle;
const assert = testing.assert;

assert(vendingMachine.giveOne(), 1, " 1 should be 1.");
assert(vendingMachine.giveOne(), 2, " failed case.");



