const testing = require("../lib/testing.js");
const sort = require("../lib/bubble-sort.js");
const bubbleSort = sort.bubbleSort;

const displayTitle = testing.displayTitle;
const assertArray = testing.assertArray;
const displaySummary = testing.displaySummary;

const bubbleSortTest = function() {
  displayTitle ("Testing of Bubble sort");

  assertArray(bubbleSort([ 2 ]), [ 2 ], " Asserting array([ 2 ]) of single element.")
  assertArray(bubbleSort([ 1, 2 ]), [ 2, 1 ], " Asserting array([ 2, 1 ]) of 2 element.")
  assertArray(bubbleSort([ 1, 2, 2, 1 ]), [ 2, 2, 1, 1 ], " Asserting array in which element is repeating.")
  assertArray(bubbleSort([ 2, 1, 5 ]), [ 5, 2, 1 ], " Asserting array of 3 element.")
  assertArray(bubbleSort([ 7, 3, 9, 10, 22 ]), [ 22, 10, 9, 7, 3 ], " Asserting array of more than 3 element.")


}

bubbleSortTest();
displaySummary();

