from typing import List


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []

        def build(s, l, line):
            if (l == 2*n):
                if (s == 0):
                    res.append(line)
                return
            if (s < n):
                line += '('
                build(s+1, l+1, line)
                line = line[:-1]
            if (s > 0):
                line += ')'
                build(s-1, l+1, line)
                line = line[:-1]
        build(1, 1, '(')
        return res


s = Solution()
print(s.generateParenthesis(2))
