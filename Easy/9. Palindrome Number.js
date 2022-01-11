/* 
 * 
 * 
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
 * 
 * 
 */

// Solution 2( O(n) )
var isPalindrome = function (x) {
	x = String(x);

	let p1 = 0;
	let p2 = x.length - 1;

	while (p1 <= p2) {
		if (x[p1] !== x[p2]) return false;
		else {
			p1++;
			p2--;
		}
	}

	return true;
};

// Solution (Recursive)
var isPalindrome = function (x) {
	if (typeof x !== "string") x = String(x);

	if (!x) return true; // base case

	if (x[0] === x[x.length - 1]) return isPalindrome(x.slice(1, x.length - 1));
	else return false;
};
