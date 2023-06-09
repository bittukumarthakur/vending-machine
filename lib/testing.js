// testing framework.
let totalTest = 0; // Global variable
let passedTest = 0; // Global variable

const addSummary = function(result) {
  totalTest += 1;
  passedTest += result ? 1 : 0
};

const displaySummary = function() {
  display( "\n Summary: " + passedTest + " / " + totalTest + " Test passed.");
}

const display = function(text) {
  console.log(text);
}

const isEqual = function(expected, actual) {
  return expected === actual;
}

const mismatchMessage = function(expected, actual, result,  message) {
  let errorMessage = message;
  errorMessage += "\n\t Expected: " + expected; 
  errorMessage += "\n\t Actual  : " + actual; 

  return result ? message : errorMessage;
}

const assert = function(expected, actual, message) {
  const result = isEqual(expected, actual);
  const  modifiedmessage = mismatchMessage(expected, actual, result, message);
  const symbol = result ? "✅" : "❌";

  addSummary(result);
  display(symbol + modifiedmessage);
}

const isArrayEqual = function(list1, list2) {

  for (let index = 0; index < list1.length; index++) {
    if (list1[index] !== list2[index]) {
      return false;
    };
  };
  return true;
} 

const assertArray = function(expected, actual, message) {
  const result = isArrayEqual(expected, actual);
  const  modifiedmessage = mismatchMessage(expected, actual, result, message);
  const symbol = result ? "✅" : "❌";

  addSummary(result);
  display(symbol + modifiedmessage);
}

const displayTitle = function(title) {
  console.log("\033[1;33m" + title +  "\033[0m");
}

exports.assert = assert;
exports.displayTitle = displayTitle;
exports.displaySummary = displaySummary;
exports.assertArray = assertArray;
exports.isArrayEqual = isArrayEqual;
