// Solution 1: failed 5 test cases
// leap year = 256 - 244 = 12.9.year
// non-leap year = 256 - 243 = 13.9.year

//Failed test case 1:
// input (stdin): 1700
// Expected Output: 12.09.

//Failed test case 2:
// input (stdin): 1800
// Expected Output: 12.09.1700

function dayOfProgrammer(year: number): string {
  // Write your code here

  let yearDay: number = 0

  if (year < 1918) {
    if (year == 1700 || year == 1900) {
      yearDay = 256 - 244
    }
    if (year % 4 == 0) {
      yearDay = 256 - 244
    } else {
      yearDay = 256 - 243
    }
  } else if (year > 1918) {
    if (year % 4 == 0 && year % 100 != 0) {
      yearDay = 256 - 244
    } else if (year % 400 == 0) {
      yearDay = 256 - 244
    } else {
      yearDay = 256 - 243
    }
  }

  return `${yearDay}.09.${year}`
}

// console.log(dayOfProgrammer(2700))

// Solution 2: failed 10 test cases
// function dayOfProgrammer(year: number): string {
//   // Write your code here
//   let yearDay

//   if (year >= 1918) {
//     ;(year % 4 == 0 && year % 100 != 0) || year % 400 == 0
//       ? (yearDay = 256 - 244)
//       : (yearDay = 256 - 243)
//   } else {
//     yearDay = 256 - 244
//   }

//   return `${yearDay}.09.${year}`
// }
// let yearDay: number;
// year < 1918 && year % 4 == 0 ? (yearDay = 256 - 244) : (yearDay = 256 - 243);

// (year > 1917 && year % 4 == 0 && year % 100 != 0) || year % 400 == 0
//   ? (yearDay = 256 - 244)
//   : (yearDay = 256 - 243);

// year == 1918 ? (yearDay = 256 - 230) : yearDay;

// return `${yearDay}.09.${year}`;

function bilalTest(year: number): string {
  let yearDay = 0
  if (year < 1918 && year % 4 == 0) {
    yearDay = 256 - 244 //julian leap year
  } else if (year > 1917 && year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        yearDay = 256 - 244
      } else {
        yearDay = 256 - 243
      }
    } else {
      yearDay = 256 - 244
    }
  } else if (year == 1918) {
    yearDay = 256 - 230
  } else {
    yearDay = 256 - 243
  }
  return `${yearDay}.09.${year}`
}

console.log(bilalTest(2700))
