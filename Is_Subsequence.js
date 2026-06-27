// Case 1: s = "abc", t = "ahbgdc"
// Case 2: s = "axc", t = "ahbgdc"
// Case 3: s = "", t = "ahbgdc"
// case 4: s = "abc", t = ""

var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }

    return i === s.length;
};