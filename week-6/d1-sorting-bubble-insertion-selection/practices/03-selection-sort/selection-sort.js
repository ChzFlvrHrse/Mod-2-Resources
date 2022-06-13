function selectionSort(arr) {
  let copy = [...arr];
  // Copy the original array
  let sorted = [];
  // Create an array to store the sorted values
  while(copy.length) {
    console.log(sorted.join(","));

    let minimum = copy.reduce(function(acc, el) {
      if (acc > el) {
        return el;
      }
      return acc;
    });
    let minRemove = copy.splice(copy.indexOf(minimum), 1)
    sorted.push(...minRemove);
  }
  return sorted;
}



function selectionSortInPlace(arr) {
  let div = 0;

  while (div < arr.length) {
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = div;
    for (let i = div + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    // Save the min value
    let minVal = arr[minIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex; i >= div; i--) {
      arr[i] = arr[i - 1];
    }

    // Put the min value at the div
    arr[div] = minVal;

    // Increment the div and repeat
    div++;
  }
  return arr;
}

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat



module.exports = [selectionSort, selectionSortInPlace];
