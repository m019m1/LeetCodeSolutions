class Solution:
  def isValid(self, s: str) -> bool:
    d = {
      '(': 1, '[': 2, '{': 3, '}': -3, ']': -2, ')': -1
    }
    temp = []
    for ch in s:
      if(d[ch] > 0):
        temp.append(ch)
      elif(len(temp) and d[temp[-1]] == -d[ch]):
        temp.pop()
      else:
        return False
    if(len(temp)):
      return False
    return True

S = Solution()
print(S.isValid('}'))