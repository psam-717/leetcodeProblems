function longestCommonPrefix(strs) {
    // Handle edge cases
    if (!strs || strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    
    // Find shortest string length to optimize
    let minLen = Math.min(...strs.map(str => str.length));
    
    // Compare characters from all strings
    for (let i = 0; i < minLen; i++) {
        let char = strs[0][i];
        
        // Check if current character matches in all strings
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                // Return prefix up to this point
                return strs[0].slice(0, i);
            }
        }
    }
    
    // If we get here, return the prefix up to minLen
    return strs[0].slice(0, minLen);
}