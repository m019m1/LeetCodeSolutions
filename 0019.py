from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if(head.next == None): return None
        k = head
        l = [k]
        while k.next:
            k = k.next
            l.append(k)
        if (n == len(l)):
            head = l[1]
        elif (n == 1):
            l[-2].next = None
        else:
            l[-n-1].next = l[-n+1]
        return head

s = Solution()
l = ListNode(val= 1, next= ListNode(val= 2, next= ListNode(val= 3, next= ListNode(val= 4, next= ListNode(val= 5, next= None)))))
s.removeNthFromEnd(l,5)
print(l.val)