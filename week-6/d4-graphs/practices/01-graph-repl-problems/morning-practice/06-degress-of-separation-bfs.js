const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function degreesOfSeparation(start, end) {
  const queue = [[start]];
  let set = new Set();
  set.add(start);

  while (queue.length) {
    let currPath = queue.shift();
    let currNode = currPath[currPath.length - 1];
    if (currNode === end) return currPath.length - 1;

    for (let neighbor of adjList[currNode]) {
      if (!set.has(neighbor)) {
      	set.add(neighbor);
      	queue.push([...currPath, neighbor]);
      }
    }
  }

  return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
