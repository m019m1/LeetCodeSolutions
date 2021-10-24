/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  let m = matrix.length, n = matrix[0].length;
  for(i=0;i<m;i++){
      for(j=0;j<n;j++) {
          if(matrix[i][j] === 0) {
              for(k=0;k<m;k++) {
                  if(matrix[k][j] !== 0) {
                      matrix[k][j] = null;
                  }
              }
              for(l=0;l<n;l++) {
                  if(matrix[i][l] !== 0) {
                      matrix[i][l] = null;
                  }
              }
          }
      }
  }
  for(i=0;i<m;i++){
      for(j=0;j<n;j++) {
          if(matrix[i][j] === null) {
              matrix[i][j] = 0;
          }            
      }
  }
};