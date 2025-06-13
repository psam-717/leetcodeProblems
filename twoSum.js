function twoSum(numArr, target){
    for(let i = 0; i < numArr.length; i ++){
        for (let j = i + 1; j < numArr.length; j ++){
            if (numArr[i] + numArr[j] == target){
                return [i, j];
            }
        }
    }

    return [];
} 


const testArr = [2,3,4,5,6];
const target = 12;

outputArr = twoSum(testArr, target);

console.log(outputArr);