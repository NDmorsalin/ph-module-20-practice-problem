/**
 * Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. * 
 * @param {*} years 
 * @returns 
 */

/* Here are the rules of leap years:
* 1. A year may be a leap year if it is evenly divisible by 4.
* 2. Years that are divisible by 100 (century years such as 1900 or 2000) cannot be leap years unless they are also divisible by 400. (For this reason, the years 1700, 1800, and 1900 were not leap years, but the years 1600 and 2000 were.) 
* link: https://www.tutorialspoint.com/learn_c_by_examples/leap_year_program_in_c.htm
*/

function findLeapYears(years) {
  const leapYears = [];
  for (let i = 0; i < years.length; i++) {
    if((years[i] % 4 === 0 && years[i] % 100 !== 0)|| years[i] % 400 === 0 ){
        leapYears.push(years[i]);
    }
  }
  return leapYears;
}

const years = findLeapYears([2023, 1900, 2000, 2024, 2025, 2028, 2030]);
console.log(years);
