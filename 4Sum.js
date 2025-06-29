/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // If array has less than 4 elements, no quadruplets possible
    if (nums.length < 4) return [];
    
    // Sort the array to use two-pointer technique and avoid duplicates
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const result = [];
    
    // Iterate through all possible pairs for the first two numbers
    for (let i = 0; i < n - 3; i++) {
        // Skip duplicates for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicates for the second number
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            
            // Use two pointers for the remaining two numbers
            let left = j + 1;
            let right = n - 1;
            
            while (left < right) {
                // Use BigInt for large numbers to avoid overflow
                const sum = BigInt(nums[i]) + BigInt(nums[j]) + BigInt(nums[left]) + BigInt(nums[right]);
                
                if (sum === BigInt(target)) {
                    // Add quadruplet to result
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    // Skip duplicates for left pointer
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    // Skip duplicates for right pointer
                    while (left < right && nums[right] === nums[right + 1]) right--;
                } else if (sum < BigInt(target)) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
};