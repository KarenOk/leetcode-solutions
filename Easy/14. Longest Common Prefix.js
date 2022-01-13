/*
 *
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
 *
 */

// Solution ( O(nlogn) )
const longestCommonPrefix = function (strs) {
	if (strs.length === 1) return strs[0];

	strs.sort((str1, str2) => (str1 > str2 ? 1 : -1));

	const first = strs[0];
	const last = strs[strs.length - 1];

	let result = "";

	for (let i = 0; i < first.length; i++) {
		if (first[i] === last[i]) result += first[i];
		else break;
	}

	return result;
};
