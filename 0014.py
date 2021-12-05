class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = ""
        for i in range(201):
            if(not strs[0] or len(strs[0]) < i+1):
                return res
            ch = strs[0][i]
            for s in strs:
                if(len(s) < i+1 or s[i] != ch):
                    return res
            res += ch
        return res
