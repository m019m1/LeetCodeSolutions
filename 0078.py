import datetime

class Solution:
    def subsets(self, nums):
        res = [[]]
        for n in nums:
            newValues = []
            for r in res:
                c = r.copy()
                c.append(n)
                newValues.append(c)
            res.extend(newValues)
        return res

S = Solution()

t = datetime.datetime.now()

# print(S.subsets([1,2,3,4,5,6,7,8]))
q = S.subsets(range(20))
print(datetime.datetime.now() - t)