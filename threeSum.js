/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b); // Sort array in ascending order
    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closest sum
    const n = nums.length;
    
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;
        
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            
            // If we find exact target, return it
            if (currentSum === target) return currentSum;
            
            // Update closestSum if currentSum is closer to target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            // Move pointers based on comparison with target
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return closestSum;
    
};

console.log(threeSumClosest([1,2,3,4,5], 6))