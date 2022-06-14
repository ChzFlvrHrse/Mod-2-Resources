// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }
  // Divide the array in half
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length)

  // Recursively sort the left half
  let leftSorted = mergeSort(left)
  // Recursively sort the right half
  let rightSorted = mergeSort(right)
  // Merge the halves together and return
  return merge(leftSorted, rightSorted)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let arr = [];

  // Point to the first value of each array
  while (arrA.length > 0 || arrB.length > 0) {
    if (arrA.length === 0) {
      arr.push(arrB.shift())
    } else if (arrB.length === 0) {
        arr.push(arrA.shift());
    } else if (arrA[0] < arrB[0]) {
      arr.push(arrA.shift());
    } else {
        arr.push(arrB.shift())
    }
  }
  // Return the return array
  return arr;
}

module.exports = [merge, mergeSort];
