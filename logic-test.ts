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
  let str2: string = "abcaaaaadeefffxz";

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
        if (common_string > longest_common_string)
          str2 = str2.split(common_string).join("");
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
// find 2nd largest number in an array
// not completed yet

function secondLargestNumber(){
  let array:number [] = [1,2,3,4,5,8,20,2]
  for(let index:number =0; index<array.length; index++){
    if(array[index] > array[index+1]){
      let largest:number [] = []
      largest.push(array[index])
      console.log(largest)
      break;
    }
      //  elseif(){

      //  }
      console.log('pass')
      console.log(array[index])
    }
  }

// secondLargestNumber()

// ==============================
// bubble sort: sort the array from smallest to largest value

function bubbleSort(){
// let array:number [] = [7,11,9,2,17,4];
let array:number [] = [1,2,3,2,17,4];
console.log('Array before bubble sort: ',array)

let temp = 0;
let n = 6;
let isSorted:boolean = false;

for (let i=0; i < n-1; i++)    // for number of passes
{
  console.log('Working on pass number ', i + 1,'\n')

  
  isSorted = true;    // if isSorted = true, then it will not go into next loop as array already sorted

  for(let j=0; j< n-1-i; j++)   // for number of comparisons
  {
    if(array[j]>array[j+1])
    {
   temp = array[j];
      array[j] = array[j+1];
      array[j+1] = temp;
      isSorted = false;
    }
  }
  console.log('Array after bubble sort: ',array,'\n')

  if(isSorted == true){
    return;
  }
}
}

bubbleSort()

// selection sort, insertion sort, quick sort, merge sort, heap sort: 