function reverse(x) {
    // Handle sign
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    
    // Reverse digits
    let reversed = 0;
    while (x > 0) {
        // Extract last digit
        const digit = x % 10;
        // Check for overflow before adding new digit
        if (reversed > (2**31 - 1) / 10) {
            return 0;
        }
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    
    // Apply sign and final overflow check
    const result = sign * reversed;
    if (result < -(2**31) || result > (2**31 - 1)) {
        return 0;
    }
    
    return result;
}