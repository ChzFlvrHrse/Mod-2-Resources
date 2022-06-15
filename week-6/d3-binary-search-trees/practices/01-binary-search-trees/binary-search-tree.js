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
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
