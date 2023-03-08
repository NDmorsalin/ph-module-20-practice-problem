/* Write a function deleteProp which takes an array. The first element will be an object, and the second element will be a string prop.

 If the object(first element) has a property prop, the function removes the property from the object and returns ’YES’; in all other cases it returns’NO’.



for example the input array will be like 

Case 1: 
Input:
﻿[
  {
   fname:'John',
  },'fname'
﻿]
Output:
"YES"
﻿
Case 2: 
Input:
﻿[
  {
   lastName:'Mithila',
  },'fname'
﻿]
Output:
"NO"
 */

function deleteProp(arr) {
  let prop = Object.keys(arr[0]);

  if (prop[0] === arr[1]) {
    // delete property
    delete arr[0][`${prop}`];
    return "YES";
  } else {
    return "NO";
  }
}

console.log(
  deleteProp([
    {
      fname: "John",
    },
    "fname",
  ])
);

console.log(
  deleteProp([
    {
      lastName: "Mithila",
    },
    "fname",
  ])
);
