// function add(a:number, b:number){
//     return a+b
// }

// let sum = add(5,1)
// console.log('Sum of two numbers is: ', sum)
// =====================

function cuteLogic1() {
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

// cuteLogic1();

function cuteLogic2() {
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

// cuteLogic2();

// two strings
// find common thing in both strings
function findCommonCharacters() {
  console.log("==== find common in two strings ====");
  var str1: string = "abcdeefghhf";
  var str2: string = "aaaaaaaaff";
  var common_data: string []=[];

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str1[i] == str2[j]) {
        common_data.push(str1[i])
        str2 = str2.slice(0, j) + str2.slice(j+1) 
        break
      }
    }
  }
  console.log(common_data);
}

findCommonCharacters();
