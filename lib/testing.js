//-------------------------------------------------------------------------------------------------------------
// testing framework.
const display = function(text) {
  console.log(text);
}

const isEqual = function(expected, actual) {
  return expected === actual;
}

const mismatchMessage = function(expected, actual, message) {
  let errorMessage = message;
  errorMessage += "\n\t Expected: " + expected; 
  errorMessage += "\n\t Actual  : " + actual; 

  return isEqual(expected, actual) ? message : errorMessage;
}

const assert = function (expected, actual, message) {
  const  modifiedmessage = mismatchMessage(expected, actual, message);
  const result = isEqual(expected, actual);
  const symbol = result ? "✅" : "❌";

  display(symbol + modifiedmessage);
}

function displayTitle (title) {
  console.log("\033[1;33m" + title +  "\033[0m");
}

exports.assert = assert;
exports.displayTitle = displayTitle;



