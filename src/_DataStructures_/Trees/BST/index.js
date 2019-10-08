const Node = require('./Node');

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(root, value) {
    if (root === null) {
      const newNode = new Node(value);
      // eslint-disable-next-line no-param-reassign
      root = newNode;
      return root;
    }

    if (value < root.value) {
      // go left
      // eslint-disable-next-line no-param-reassign
      root.leftChild = this.insert(root.leftChild, value);
      return root;
    }
    if (value > root.value) {
      // go right
      // eslint-disable-next-line no-param-reassign
      root.rightChild = this.insert(root.rightChild, value);
      return root;
    }
    return root;
  }

  preorder(root) {
    if (root === null) return;
    // eslint-disable-next-line no-console
    console.log(`${root.value} `);

    this.preorder(root.leftChild);
    this.preorder(root.rightChild);
  }
}

// const bst = new BinarySearchTree(10);
// console.log(bst.root);
// bst.insert(bst.root, 12);
// bst.insert(bst.root, 9);
// bst.insert(bst.root, 19);
// bst.insert(bst.root, 11);
// bst.insert(bst.root, 6);

// console.log(bst.root);

// bst.preorder(bst.root);

module.exports = BinarySearchTree;