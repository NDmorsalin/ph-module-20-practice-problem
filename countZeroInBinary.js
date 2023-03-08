/* Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.



Sample Input:

10101


Sample output:

2 */

function count_zero(bi) {
  let count = 0;

  for (let i = 0; i < bi.length; i++) {
    if (bi[i] === "0") {
      count++;
    }
  }

  return count;
}
console.log(count_zero("10101"));
