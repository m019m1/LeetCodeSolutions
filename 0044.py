class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        #p = list(filter(lambda item: item != '', p.split('*')))
        table = {}
        if (p[0] == '*'):
            for i in range(len(s)):
                table[0,i] = 1
        elif (s[0] == p[0] or p[0] == '?'):
            table['0,0'] = 1
        
        for i in range(1, len(p)):
            for j in range(len(s)):
                if ((f'{i-1,j-1}' or f'{i-1,j}' in table) and p[i-1] == '*'):
                    if (p[i] == '*'):
                        for k in range(j,len(s)):
                            table[f'{i,k}'] = 1
                        break
                    elif (s[j] == p[i] or p[i] == '?'):
                        table[f'{i,j}'] = 1            
        return f'{len(p)-1, len(s)-1}' in table