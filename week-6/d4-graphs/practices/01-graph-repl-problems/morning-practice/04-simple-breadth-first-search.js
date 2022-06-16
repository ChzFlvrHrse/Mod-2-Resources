const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function breadthFirstSearch(start, end) {
  let queue = [start];
  let set = new Set();
  set.add(start);

  while (queue.length) {
    let curr = queue.shift();

    for (let i = 0; i < adjList[curr].length; i++) {
      let el = adjList[curr][i]
      if (el === end) {
        return true;
      } else if (!set.has(el)) {
        set.add(el);
        queue.push(el);
      }
    }
  }
  return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
