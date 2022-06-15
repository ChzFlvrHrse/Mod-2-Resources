// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          this.insert(val, currentNode.right);
        }
    }
  }

  search(val, currentNode = this.root) {
    if (!currentNode) return false;
    if (val === currentNode.val) return true;
    if (val < currentNode.val) return this.search(val, currentNode.left);
    if (val > currentNode.val) return this.search(val, currentNode.right);
  }


  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    if (!this.root) return;

    let queue = [];
    queue.push(this.root)

    while (queue.length) {
      let node = queue.shift();
      console.log(node.val);

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    if (!this.root) return;

    let stack = [this.root];

    while (stack.length) {
      let node = stack.pop();
      console.log(node.val);

      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
