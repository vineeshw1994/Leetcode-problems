class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function inorderTraversal(root) {
    const result = [];
  
    function inorder(node) {
      if (node) {
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
      }
    }
  
    inorder(root);
  
    return result;
  }
  
  
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  
  console.log(inorderTraversal(root)); // Output: [1, 3, 2]
  