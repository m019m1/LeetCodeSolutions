/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
   for(i = 0; i < nums.length - 1; i++) {
     for(j = i+1; j< nums.length; j++){
       if(nums[i] + nums[j] == target) {
         console.log ([i, j]);
       }
     }
   }  
};

nums = [2,7,11,15], target = 9
twoSum(nums, target);