/* Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers. */

function findOddSum(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(findOddSum([5, 7, 8, 10, 45, 30]));
