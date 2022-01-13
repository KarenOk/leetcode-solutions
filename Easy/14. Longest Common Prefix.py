"""
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
"""

from typing import List 

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # Solution ( O(nlogn) )
        if len(strs) == 1:
            return strs[0]

        strs.sort()

        result = ""
        first = strs[0]
        last = strs[len(strs) - 1]

        for i in range(len(first)):
            if first[i] == last[i]:
                result = result + first[i]
            else:
                break

        return result
        