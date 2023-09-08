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

  let array1_index_length:number[]=[];
  for (let i = 0; i < array1.length; i++) {
    array1_index_length.push(array1[i].length)
    console.log(array1[i])
  }
  length_array1 = Array(array1.length)
  console.log('lenght of array1 is: ', length_array1)
  console.log('per index length of array1 is: ',array1_index_length)

}
// arrayIndexCount();