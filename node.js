class Node {
  constructor(data, left = null, right = null) {
    // `data` is the data that we're trying to storage
    this.data = data;
    // `left` and `right` are pointing to the
    // left node and right node of the actual tree.
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;
