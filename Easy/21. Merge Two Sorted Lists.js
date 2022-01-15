/*
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

*/

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
	if (!list1) return list2;
	if (!list2) return list1;

	const result = new ListNode();
	let resultTail = result;
	p1 = list1;
	p2 = list2;

	while (p1 && p2) {
		if (p1.val > p2.val) {
			resultTail.next = new ListNode(p2.val);
			resultTail = resultTail.next;
			p2 = p2.next;
		} else {
			resultTail.next = new ListNode(p1.val);
			resultTail = resultTail.next;
			p1 = p1.next;
		}
	}

	if (p1) {
		resultTail.next = p1;
	}

	if (p2) {
		resultTail.next = p2;
	}

	return result.next;
};
