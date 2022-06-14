function quicksort(arr) {
  if (arr.length <= 1) return arr;
  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Pick the first value as the pivot
  let pivot = arr[0]
  let left = [];
  let right = [];
  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      // every number smaller than the pivot is to the left
      left.push(arr[i])
    } else {
      // every number larger (or equal) than the pivot is to the right
        right.push(arr[i])
    }
  }

  let leftSorted = quicksort(left);// Recursively sort the left
  let rightSorted = quicksort(right);// Recursively sort the right

  // Return the left, pivot and right in sorted order
  return [...leftSorted, pivot, ...rightSorted]
}


module.exports = [quicksort];
