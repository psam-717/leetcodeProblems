function removeDuplicates(nums) {
    // If array is empty or has one element, return its length
    if (nums.length <= 1) return nums.length;
    
    // Initialize pointer for next unique element position
    let k = 1;
    
    // Iterate through the array starting from second element
    for (let i = 1; i < nums.length; i++) {
        // If current element is different from previous unique element
        if (nums[i] !== nums[k - 1]) {
            // Place it at position k and increment k
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
}