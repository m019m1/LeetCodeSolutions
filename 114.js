/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
  if(root) {
      if(root.right) {
          flatten(root.right);
      }
      if(root.left) {
          flatten(root.left);
          let r = root.left;
          while(r.right) {
              r = r.right;
          }
          r.right = root.right;
          root.right = root.left;
          root.left = null;
      }
     
  }
};