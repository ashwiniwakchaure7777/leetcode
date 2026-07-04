/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const combined = [...nums1, ...nums2].sort((a, b) => a - b);
    const n = combined.length;

    if (n % 2 === 0) {
        const mid1 = n / 2 - 1;
        const mid2 = n / 2;
        return (combined[mid1] + combined[mid2]) / 2;
    } else {
        return combined[Math.floor(n / 2)];
    }
};