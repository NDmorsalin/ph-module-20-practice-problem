function findingSmallest ( numbers ) {
    //Write your code here
    //Don't forget to return
      let smallest = Infinity
    for (let i = 0; i < numbers.length; i++) {
        if (smallest > numbers[i]) {
          smallest = numbers[i];
        }
       
      }
      return smallest;
    }

    findingSmallest([10,33,5,99,6])