const Node = require('./node');
const { search } = require('./searchTree');

class BinarySearchTree {
  // `root` points to the root node, top of the tree,
  // initially starting with null.
  constructor() { this.root = null }

  add(data) {
    // we reference the root node.
    const node = this.root;

    if (!node) {
      // if this is the first data storaged, the root node will be null.
      // then we storage the data right there.
      this.root = new Node(data);
      return;
    } else {
      // if the first node is already keeping data,
      // we have to find the right place to store the data in question.
      return search(node);
    }
  }

  findMin() {
    // we reference the root node.
    let currentNode = this.root;
    // while the current left node isn't null,
    // the current node receives the left node.
    while (currentNode.left) { currentNode = currentNode.left };
    // at the moment that currentNode.left equals null,
    // we'll return the data of the node.
    return currentNode.data;
  }

  findMax() {
    // we reference the root node.
    let currentNode = this.root;
    // while the current right node isn't null,
    // the current node receives the right node.
    while (currentNode.right) { currentNode = currentNode.right };
    // at the moment that currentNode.left equals null,
    // we'll return the data of the node.
    return currentNode.data;
  }

  // find method will return the node data itself.
  find(data) {
    // we reference the root node.
    let currentNode = this.root;
    // while the data of the current node isn't equal to data being searched
    // we'll search the nodes.
    while (currentNode.data !== data) {
      // if the data is 'smaller' than the current node,
      // we'll search the left side of the node.
      if (data < currentNode.data) { currentNode = currentNode.left }
      // otherwise, we'll search the right side.
      else { currentNode = currentNode.right };
      // if the data isn't found, we'll return null;
      if (!currentNode) { return null };
    }
    return currentNode.data;
  }

  // isPresent method just returns true or false, not the data.
  isPresent(data) {
    // we refence the root node.
    let currentNode = this.root;
    // while there is a current node (not being null)
    // we gonna search for the data.
    while (currentNode) {
      // in case of the current node data equals the search data, we'll return true.
      if (data === currentNode.data) return true;
      // if data is smaller than the current node
      // the current node will receive the left node.
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        // otherwise (data bigger than current node data), will receive the right node.
        currentNode = currentNode.right;
      }
    }
    // by default, will return false, unless the data is found.
    return false;
  }
}

module.exports = BinarySearchTree;
