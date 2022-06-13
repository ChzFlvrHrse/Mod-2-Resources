
function bubbleSort(arr) {
  let sorted = false;
  while(!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        console.log(arr.join(","));
        sorted = false;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
