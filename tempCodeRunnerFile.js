function reverseDigit(x){
    const sign = x >=0 ? 1 : -1; // sign of number provided
    // means sign takes a value of 1 when x is greater than 
    // or equal to 0 else it takes a number of -1
    
    // take the absolute value of the entered digit
    x = Math.abs(x);

    let reversed = 0;
    while (x > 0){
        const lastDigit = x % 10;

        //checking for overflow 
        if(reversed > (2**31 - 1)/10){
            return 0;
        }
        reversed = reversed * 10 + lastDigit;
    }

   
}

console.log(reverseDigit(7899))