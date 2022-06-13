// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  let copy = arr.slice()
  let sorted = [];

  while (copy.length) {
    console.log(sorted.join(","))

    let val = copy.pop();
    sorted.push(null);
    let i = sorted.length - 1;

    while (i > 0) {
      if (sorted[i - 1] < val) {
        break;
      } else {
          sorted[i] = sorted[i - 1];
          i--;
      }
    }
    sorted[i] = val;
  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  let div = 1;

  while (div < arr.length) {
    console.log(arr.join(","))

    let val = arr[div];
    let i = div;

    while (i > 0) {
      if (arr[i - 1] < val) {
        break;
      } else {
          arr[i] = arr[i - 1];
          i--
      }
    }
    arr[i] = val;
    div++;
  }
}

module.exports = [insertionSort, insertionSortInPlace];
