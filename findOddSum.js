/* Write a function findOddSum() that will take the array as the input parameter and will return the sum of the odd numbers. No need to return anything if the odd numbers do not exist in the array



Sample Input:

[5, 7, 8, 10, 45, 30]


Sample Output:

57 */

function findOddSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i];
    }
  }

  return sum ? sum : null;
}

console.log(findOddSum([ 8, 10, 30]));
