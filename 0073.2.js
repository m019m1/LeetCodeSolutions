/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length, n = matrix[0].length, row0flag = 1;
  for(i=0;i<m;i++) {
    for(j=0;j<n;j++) {
      if(matrix[i][j] == 0) {
        if(i == 0) {
          row0flag = 0;
        } else {
          matrix[i][0] = matrix[0][j] = 0;
        }
      }
    }
  }
  for(i=m-1;i>=0;i--) {
    for(j=n-1;j>=0;j--) {
      if( (i && (matrix[i][0] == 0 || matrix[0][j] == 0))
      || (i == 0 && row0flag == 0)) {
        matrix[i][j] = 0;
      }
    }
  }
};

let matrix = [[1,0]];
setZeroes(matrix);
console.log(matrix);