/*
 *
   Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    

    Example 1:

    Input: s = "()"
    Output: true
    Example 2:

    Input: s = "()[]{}"
    Output: true
    Example 3:

    Input: s = "(]"
    Output: false
    

    Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
 *
 */

const isValid = function (s) {
	const stack = [];

	const bracketMapping = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	for (let char of s) {
		if (bracketMapping[char]) {
			const popped = stack.pop();
			if (popped !== bracketMapping[char]) return false;
		} else {
			stack.push(char);
		}
	}

	return !stack.length;
};
