// Version 1: Using Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)
var maxOperations = function(nums, k) {
    let map = new Map()
    let count =0;
    for(let num of nums)
    {
        let need = k- num;
       if (map.get(need) > 0) {
            count++;

            map.set(need, map.get(need) - 1);
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }
    return count;
};

// Version 2: Using Two Pointers
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
var maxOperations = function(nums, k) {
    nums.sort((a,b) => a-b); // Sort the array in ascending order. Sorting is necessary for the two-pointer technique to work correctly. It is slowest part of the algorithm, taking O(n log n) time.
    let left = 0;
    let right = nums.length - 1;
    let count = 0;
    while(left < right)
    {
        let sum = nums[left] + nums[right];
        if(sum === k)
        {
            count++;
            left++;
            right--;
        }
        else if(sum < k)
        {
            left++;
        }
        else
        {
            right--;
        }
    }
    return count;
}