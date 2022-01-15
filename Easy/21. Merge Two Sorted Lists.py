"""
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
"""

from typing import List, Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1:
            return list2

        if not list2:
            return list1

        result = ListNode()
        result_tail = result
        p1 = list1
        p2 = list2

        while p1 and p2:
            if p1.val > p2.val:
                result_tail.next = ListNode(p2.val)
                result_tail = result_tail.next
                p2 = p2.next
            else:
                result_tail.next = ListNode(p1.val)
                result_tail = result_tail.next
                p1 = p1.next

        if p1:
            result_tail.next = p1   
        
        if p2:
            result_tail.next = p2 

        return result.next

