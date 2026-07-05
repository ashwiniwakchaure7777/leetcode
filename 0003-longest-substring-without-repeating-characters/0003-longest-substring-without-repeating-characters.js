/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let map = new Map();
        let temp = 0;
        for (let j = i; j < s.length; j++) {
            if (!map.has(s[j])) {
                temp++;
                map.set(s[j], true)
            } else {
                break;
            }
        }
        if (count < temp) {
            count = temp
        } else {
            continue;
        }
    }
    return count;
};