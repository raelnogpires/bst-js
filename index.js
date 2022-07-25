const Node = require('./node');

class BinarySearchTree {
  // `root` points to the root node, top of the tree,
  // initially starting with null.
  constructor() { this.root = null }

  add(data) {
    // we reference the root/top node.
    const node = this.root;

    if (!node) {
    // if this is the first data storaged, the root node will be null.
    // then we storage the data right there.
      this.root = new Node(data);
      return;
    } else {
    // if the first node is already keeping data,
    // we have to find the right place to store the data in question
      const search = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return search(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return search(node.right);
          }
        } else {
          return null;
        }
      };

      return search(node);
    }
  }
}

module.exports = BinarySearchTree;
