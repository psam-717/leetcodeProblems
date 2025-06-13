function medianOfTwoArrays (nums1, nums2){
    // merge the arrays
    for(let i = 0; i < nums2.length; i ++){
        nums1.push(nums2[i]);
    }

    // sort the array
    nums1.sort((a,b) => a - b);
    
    // find the median
    let median;
    const n = nums1.length;

    if(n % 2 === 0){
        median = (nums1[n/2 - 1] + nums1[n/2]) / 2
    } else {
        median = nums1[Math.floor(n/2)];
    }
    return median;

}


arr1 = [1,2];
arr2 = [3,4];

console.log(medianOfTwoArrays(arr1, arr2));



























// let arr1 = [1,2,12];
// let arr2 = [4,10,3];


// //merge the array
// for (let i = 0; i < arr2.length; i ++){
//     arr1.push(arr2[i]);
// }

// //sort the array
// arr1.sort((a, b) => a - b);
// console.log('Sorted array: ', arr1)
// // calculate the median
// let median;
// const n = arr1.length;
// if(n % 2 === 0){
//     median = (arr1[n/2 - 1] + arr1[n/2])/2
// }else {
//     median = arr1[Math.floor(n / 2)];
// }

// console.log(median)







