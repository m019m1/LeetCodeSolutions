/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1;
  let volume = 0;
  while (i < j) {
    let shortLine = Math.min(height[i], height[j]);
    volume = Math.max(volume, shortLine * (j - i));
    if (shortLine == height[i]) {
      i++;
    } else {
      j--;
    }
  }
  return volume;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
