class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        goon = 1
        while(goon):
            goon = 0
            for i in range(len(nums)):
                if(nums[i] > 0 and nums[i] <= len(nums) and nums[i] != i+1 and nums[i] != nums[nums[i]-1]):
                    swap = nums[i]
                    nums[i] = nums[swap-1]
                    nums[swap-1] = swap
                    goon = 1
        for i in range(len(nums)):
            if(nums[i] != i+1):
                return i+1
        return len(nums)+1
