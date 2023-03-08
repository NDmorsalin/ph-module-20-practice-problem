/* You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.



Sample Input:

[10,33,5,99,6]


Sample output:

33 */

function secondLargeNum(arr) {
  let largeNum = -Infinity;
  let secondLargeNum = -Infinity;

  // find the largest number
  for (let i = 0; i < arr.length; i++) {
    if (largeNum < arr[i]) {
      largeNum = arr[i];
    }
   
  }
  // remove the largest number from the array
    arr.splice(arr.indexOf(largeNum),1)
    // find the largest number of existing array after remove largest num of main array
    for (let i = 0; i < arr.length; i++) {
      if (secondLargeNum < arr[i]) {
        secondLargeNum = arr[i];
      }
     
    }

    return secondLargeNum;
}

console.log(secondLargeNum([99.9,10, 33, 109,5, 99, 6,88,77,100]));
