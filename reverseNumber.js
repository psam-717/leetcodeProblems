function reverse(x) {
    const negNumber = x < 0;

    //find the absolute num
    const absoluteNumber = Math.abs(x);

    const reversed = parseInt(
        absoluteNumber.toString().split('').reverse().join('')
    )

    return negNumber ? -reversed : reversed;
}

let total = 1234;
console.log(reverse(total))