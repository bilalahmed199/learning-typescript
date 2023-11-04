// function add(a:number, b:number){
//     return a+b
// }

// let sum = add(5,1)
// console.log('Sum of two numbers is: ', sum)
// =====================

function findMultipleCharactors() {
  console.log("==== Find no. of abc in a string ====");
  var test: string = "debabcabcabdaacdfabc";
  // var test: string = "aabc";
  // var test: string = "ababcaababc";
  var count: number = 0;

  for (var index = 0; index < test.length; index++) {
    if (
      test[index] == "a" &&
      test[index + 1] == "b" &&
      test[index + 2] == "c"
    ) {
      count += 1;
      console.log("count is: ", count);
    }
  }
}
// findMultipleCharactors();

// ==============================

function comparingTwoStrings() {
  console.log("==== Comparing two strings ====");
  var string1: string = "abcdasdadasdcda";
  var string2: string = "abcdasaasdawfaa";
  var count: number = 0;
  for (var index = 0; index < string1.length; index++) {
    if (string1[index] === "a" && string2[index] === "a") {
      count += 1;
      console.log("count is: ", count);
    }
  }
}
// comparingTwoStrings();

// ==============================

// find common data in two strings
function findCommonCharacters() {
  console.log("==== find common in two strings ====");
  var str1: string = "abcdeefghhf";
  var str2: string = "aaabcaaaaadeeff";
  var common_data: string[] = [];

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str1[i] == str2[j]) {
        common_data.push(str1[i]);
        // below line will remove matched value from str2
        str2 = str2.slice(0, j) + str2.slice(j + 1);
        break;
      }
    }
  }
  console.log(common_data);
}
// findCommonCharacters();

// ==============================

// find longest common substring in two strings
function findLongestSubstring() {
  console.log("==== Find longest common substring ====");
  let str1: string = "abcdeefghhfaaaaa";
  let str2: string = "abcaaaaadeefffxv";

  let common_strings: string[] = [];
  let longest_common_string = "";

  for (let i = 0; i < str1.length; i++) {
    let common_string = "";
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        common_string += str2[j];
        i += 1;
      } else if (common_string != "") {
        common_strings.push(common_string);
        
        if (common_string > longest_common_string){
          str2 = str2.split(common_string).join("");
        }
        longest_common_string = common_string;
        common_string = "";
        i -= 1;
      }
    }
  }
  console.log("Common strings are: ", common_strings);
  console.log("Longest sub-string is: ", longest_common_string);
}
// findLongestSubstring();

// ==============================

function arrayIndexCount() {
  let array1: number[][] = [[0, 1, 2], [1, 2], [3, 4, 5, 6], [2]];
  let length_array1: number[];

  let array1_index_length: number[] = [];
  for (let i = 0; i < array1.length; i++) {
    array1_index_length.push(array1[i].length);
    console.log(array1[i]);
  }
  length_array1 = Array(array1.length);
  console.log("lenght of array1 is: ", length_array1);
  console.log("per index length of array1 is: ", array1_index_length);
}
// arrayIndexCount();

// ==============================
// create 2 dimensional array by taking inout from user
// and generating array based on the sqrt of given number
function matrixArray() {
  let num: number = 9;
  let matrix_size: number = Math.sqrt(num);
  
  // creating 2D array
  // verify if matrix size is not a floating value
  if (matrix_size != Math.floor(matrix_size)) {
    console.log("matrix size must be a whole number");
  } 
  else {
    console.log("matrix size of array is: ", matrix_size);
    let custom_array: number[][] = Array.from(Array(matrix_size), () =>
      new Array(matrix_size).fill(0)
    );
    console.log("Array before data fill: ", custom_array);

    // fill data in array
    let fill_data = 1;
    for (let i: number = 0; i < matrix_size; i++) {
      for (let j: number = 0; j < matrix_size; j++) {
        if (custom_array[i][j] == 0) {
          custom_array[i][j] = fill_data;
          fill_data += 1;
        }
      }
    }
    console.log("Array after data fill: ", custom_array);
  }
}
// matrixArray();

// ==============================
// bubble sort: sort the array from smallest to largest value

function bubbleSort(array: number[]): number[] {
  console.log('Array before bubble sort: ', array);

  let temp: number = 0;
  let isSorted: boolean = false;
  for (let i = 0; i < array.length - 1; i++) {
    isSorted = true;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSorted = false;
      }
    }
    if (isSorted) {
      console.log('Array after bubble sort: ', array);
      return array;
    }
  }
  return array;
}

// bubbleSort([7,11,9,2,17,4])

// selection sort, insertion sort, quick sort, merge sort, heap sort:

// ==============================
// find 2nd largest number in an array
// not completed yet
// console.log("==== Find 2nd largest number in an array ====");

function findSecondLargest(array: number[]): number {
  const sortedArray = bubbleSort(array);
  const secondLargestNum:number = sortedArray[sortedArray.length - 2]
  console.log('The second largest number is ', secondLargestNum);
  return secondLargestNum;
}
// findSecondLargest([1, 2, 3, 4, 6, 8, 4])
// =================================


function evenNumbers() {
  let array: number[] = []
  for (let i = 1; i <= 10; i++){
    if (i % 2 === 0) {
      array.push(i)
    }
    console.log('Even numbers are: ', i)
  }
  console.log('Array of even numbers is: ', array )
}
// evenNumbers()
// =================================

function reverseOfString() {
  let string = "abcde";
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  console.log('Original string: ', string);
  console.log('Reversed string: ', reversedString);
}
// reverseOfString();
// =================================

function sumOfNumbers() {
  let sumOfArray = 0;
  let array: number[] = [];

  // create an array, i.e., [1,2,3,4,5] 
  for (let i = 1; i <= 5; i++) {
    array.push(i)
  }

  for (let j = 0; j < array.length; j++) {
    sumOfArray += array[j]
  }

  console.log('Array: ', array)
  console.log('sum of array numbers: ', sumOfArray)
}
// sumOfNumbers()
// =================================

// program to find even number in array then multiply with 2 & add all numbers

function findEven_multiply_sumOfArray() {
  let array = [1, 2, 3, 4, 5]
  
  // dummy test
  let names: string[] = ['a', 'b', 'd']
  let dataFound = names.filter(data => data == 'b')
  console.log(dataFound)

  // Step 1: finding even numbers
  let evenNumbers = array.filter(number => number % 2 == 0)
  console.log(evenNumbers)
  
  // Step 2: multiplying with 2 
  let multiplyNumbers = evenNumbers.map(number => number * 2)
  console.log(multiplyNumbers)

  // Step 3: adding all numbers
  let addAllNumbers = multiplyNumbers.reduce((sum, number) => sum + number, 0)
  console.log(addAllNumbers)
  
  // or 
  //we can chain all methods
  let sumOfArray = array.filter(num => num % 2 == 0).map(num => num * 2).reduce((sum, num) => sum + num, 0)
  console.log(sumOfArray)
}

findEven_multiply_sumOfArray()