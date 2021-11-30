# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        res = ListNode()
        k = res
        i1 = l1
        i2 = l2
        rem = 0
        while True:
            s1 = i1.val if i1 else 0
            s2 = i2.val if i2 else 0
            k.next = ListNode((s1 + s2 + rem) % 10)
            k = k.next
            rem = (s1 + s2 + rem) // 10
            if((not i1 or not i1.next) and (not i2 or not i2.next)):
                if(rem):
                    k.next = ListNode(rem)
                break
            i1 = i1.next if i1 else None
            i2 = i2.next if i2 else None
        return res.next
