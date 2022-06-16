const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function aShortestPath(start, end) {
  const queue = [[start]];
  let set = new Set();
  set.add(start);

  while (queue.length) {
    let currPath = queue.shift();
    let currNode = currPath[currPath.length - 1];
    if (currNode === end) return currPath;

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
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
