"""
    Given an integer x, return true if x is palindrome integer.

    An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.
    

    Example 1:

    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.
    Example 2:

    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
"""

class Solution:
   def isPalindrome(self, x: int) -> bool:
        # Solution ( O(N) )
        x = str(x)

        p1 = 0
        p2 = len(x) - 1

        while p1 <= p2:
            if x[p1] != x[p2]:
                return False
            else:
                p1 = p1 + 1
                p2 = p2 - 1

        return True

        # Solution (Recursive)
        if type(x) != str:
            x = str(x)

        if not x:
            return True

        if x[0] == x[len(x) - 1]:
            return self.isPalindrome(x[1:len(x) -  1])
        else:
            return False
   
        