const bubbleSort = function(list) {
  let currentList = list.slice();

  for (let index = 0; index < list.length; index++) {
    for (let index = 0; index < list.length ; index++) {

      if (currentList[index] < currentList[index + 1]) {
        const temValue = currentList[index];
        currentList[index] = currentList[index + 1];
        currentList[index + 1] = temValue;
      };
    };
  }

  return currentList;
}

exports.bubbleSort = bubbleSort;
