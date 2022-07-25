const search = (node) => {
  // if the data is 'smaller' than the root node data,
  // it's going to be stored at the left side of the tree.
  if (data < node.data) {
    if (!node.left) {
      // if the left node is null, we'll assign node.left to the new data.
      node.left = new Node(data);
      return;
    } else if (node.left) {
      // if the node isn't null, we'll keep searching
      // this function is going to run until it finds the correct node.
      return search(node.left);
    }
  // if the data is 'bigger' than the root node data,
  // it's going to be stored at the right side of the three.
  } else if (data > node.data) {
    if (!node.right) {
      // if the right node is null, we'll assign node.right to the new data.
      node.right = new Node(data);
      return;
    } else if (node.right) {
      // if the node isn't null, we'll keep searching.
      return search(node.right);
    }
  } else {
    // if the data doesn't fit, we'll return null.
    return null;
  }
};

module.exports = { search };