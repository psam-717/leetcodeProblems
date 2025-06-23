/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Sort the array to use two-pointer technique and handle duplicates
    nums.sort((a, b) => a - b);
    const result = [];
    
    // Iterate through array, fixing first number
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for first number
        if (i > 0 && nums[i] === nums[i-1]) continue;
        
        // Use two pointers for remaining numbers
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for left pointer
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for right pointer
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            }
            else if (sum < 0) {
                // Sum too small, move left pointer
                left++;
            }
            else {
                // Sum too large, move right pointer
                right--;
            }
        }
    }
    
    return result;
};