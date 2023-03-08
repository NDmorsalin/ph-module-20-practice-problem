/* You received your final exam results. Write a function that will take your mark as an input and return you a grade, as shown in the sample input and output below.



The grading chart is 



80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade




Sample Input

95


Output

A */

function findGrade(marks) {
  //write your code here
  //don't forget to write return
  if (marks >= 80) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "F";
  }
}

console.log(findGrade(99));
