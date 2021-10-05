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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  let res = [];
  return getTree(root, res);
};

function getTree(root, res) {
  if(!root) return [];
  if(root.left) {
      getTree(root.left,res);
  }
  res.push(root.val);
  if(root.right) {
      getTree(root.right,res);
  }
  return res;
}