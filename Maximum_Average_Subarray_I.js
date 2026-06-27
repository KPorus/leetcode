var findMaxAverage = function(nums, k) {
    let windowSum = 0;

    // First window
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i];         // add new element
        windowSum -= nums[i - k];     // remove old element

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k;
};