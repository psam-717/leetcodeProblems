function longestPalindrome(s) {
    if(!s || s.length === 0) return "";

    let start = 0;
    let maxLength = 1;

    function expandAroundCenter (left, right) {
        while ( left >= 0 && right < s.length  && s[left] ===s[right]){
            const currentLength = right - left + 1;
            if(currentLength > maxLength){
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }

    for ( let i = 0; i < s.length; i ++){
        //checking for odd length palindromes
        expandAroundCenter(i, i);

        //even length palindromes
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, start + maxLength);
}