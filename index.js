const Node = require('./node');

class BinarySearchTree {
  constructor() { this.root = null }

  add(data) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
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
