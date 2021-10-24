/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let [m,n,first,second] = [nums1.length,nums2.length, nums1, nums2];
  let isOdd = (m + n) % 2;
  if(m > n) [m,n,first,second] = [n,m,second,first];
  if(m+n == 1) return first[0] ? first[0] : second[0];
  let imin = 0, imax = m;
  while (imin <= imax) {
    let i = Math.floor((imin + imax) / 2);
    let j = Math.floor((m + n) / 2) - i;
    let a = i==0 || first[i-1] <= second[j] , b = i==m || first[i] >= second[j-1];
    if (a && b) {
      let k =  j==n ? first[i] : i==m ? second[j] : Math.min(first[i], second[j]);
      let l =  i==0 ? second[j-1] : j==0 ? first[i-1] : Math.max(first[i-1], second[j-1]);
      if(isOdd) return k;
      else return (k + l) / 2;
    } else if(a) {
      imin = i + 1;
    } else {
      imax = i - 1;
    }
  }
}

let nums1;
let nums2;
nums2 = [1,3];
nums1 = [2,4,5,6,7,8];


console.log(findMedianSortedArrays(nums1, nums2));
// [1,1,1, 1,1,1, 1,1, 2,3,3, 3,3,100]
