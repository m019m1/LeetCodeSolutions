# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if(not list1):
            return list2
        if(not list2):
            return list1
        k1 = list1
        k2 = list2
        res = ListNode()
        helper = res
        while (k1 or k2):
            if (not k1):
                helper.val = k2.val
                k2 = k2.next
            elif (not k2):
                helper.val = k1.val
                k1 = k1.next
            elif (k1.val <= k2.val):
                helper.val = k1.val
                k1 = k1.next
            else:
                helper.val = k2.val
                k2 = k2.next
            if (k1 or k2):
                helper.next = ListNode(0)
                helper = helper.next
        return res
