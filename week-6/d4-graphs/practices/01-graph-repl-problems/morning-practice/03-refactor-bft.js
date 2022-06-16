const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    let queue = [start];
    let set = new Set();
    set.add(start);

    let arr = [];

    while (queue.length) {
        let curr = queue.shift();
      arr.push(curr);

      adjList[curr].forEach((el) => {
          if (!set.has(el)) {
              set.add(el);
                queue.push(el);
          }
      })
    }
    return arr;
  }

console.log("First Test:")
console.log(printBreadthFirst(3)); // Prints 1 through 6 in Breadth-first order, starting with 3
                    // One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
console.log("Second Test:")
console.log(printBreadthFirst(6)); // Prints 1 through 6 in Breadth-first order, starting with 6
                    // One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
console.log("Third Test:")
console.log(printBreadthFirst(4)); // Prints 1 through 6 in Breadth-first order, starting with 4
                        // One possible solution:  [ 4, 3, 5, 6, 2, 1 ]
