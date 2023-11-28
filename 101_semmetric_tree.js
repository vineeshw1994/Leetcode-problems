
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  function isSymmetric(root) {
    
    function isMirror(tree1, tree2) {
      
      if (tree1 === null && tree2 === null) {
        return true;
      }
      if (tree1 === null || tree2 === null) {
        return false;
      }
  
     
      return (
        tree1.val === tree2.val &&
        isMirror(tree1.left, tree2.right) &&
        isMirror(tree1.right, tree2.left)
      );
    }
  
    return isMirror(root, root);
  }
  
  
  const symmetricTree = new TreeNode(1);
  symmetricTree.left = new TreeNode(2);
  symmetricTree.right = new TreeNode(2);
  symmetricTree.left.left = new TreeNode(3);
  symmetricTree.left.right = new TreeNode(4);
  symmetricTree.right.left = new TreeNode(4);
  symmetricTree.right.right = new TreeNode(3);
  
  
  const result = isSymmetric(symmetricTree);
  console.log(result); // Output: true
  