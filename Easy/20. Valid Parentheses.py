"""
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
"""

class Solution:
    def isValid(self, s: str) -> bool:

        stack = []
        bracket_mapping = {
            ")": "(",
            "}": "{",
            "]": "["
        }
        
        for char in s:
            if bracket_mapping.get(char):
                try:
                    popped = stack.pop()
                    if popped != bracket_mapping[char]:
                        return False
                except IndexError:
                    return False
            else:
                stack.append(char)
                
        return not len(stack)
