// to generate array of custom length
var custom_arrray: number[] = [];
for (var i: number = 1; i <= 30; i++) {
  custom_arrray.push(i);
}
console.log(custom_arrray);

var index:number = 0;
while(index<custom_arrray.length){
  var data:number = custom_arrray[index];

  if(data%3==0 && data%5==0){
    console.log(data,'fizz & buzz')
  }
  else if(data%3==0){
    console.log(data,'fizz')
  }
  
  else if(data%5==0){
    console.log(data,'buzz')
  }
  else{
    console.log(data)

  }
  index++
}

function reduce() {
  // method 1:  
  let arrayOfNumbers: number[] = [1, 2, 3, 4]
  let sum = 0
  for (let i = 0; i < arrayOfNumbers.length; i++){
    sum = sum + arrayOfNumbers[i]
  }
  console.log('using For loop: ',sum)
  
  // method 2:
  // .reduce function in typescript for loop
  // it is used to add or combien
  console.log("==== sum of array using .reduce method ====");
  let usingReduceMethod = arrayOfNumbers.reduce((sum, number) => sum + number, 0)
  console.log('using .reduce method: ',usingReduceMethod)
}
// reduce()


function filter() {
  // method 1:  
  let scores: number[] = [4, 5, 6, 7, 8]
  let evenNumbers:number[] = []
  for (let i = 0; i < scores.length; i++){
    if (scores[i] % 2 == 0) {
      evenNumbers.push(scores[i])   
    }
  }
  console.log('using FOR loop: ', evenNumbers)
  
  // method 2:  
  console.log("==== even number in array using .filter method ====");
  let usingFilterMethod = scores.filter(score => score % 2 == 0)
  console.log('using .filter method: ',usingFilterMethod)
}
// filter()


function map() {
  // method 1:
  let array: number[] = [2, 3, 4, 5]
  for (let i = 0; i < array.length; i++){
    console.log(array[i] * 3)
  }

  // method 2:
  let usingMapMethod = array.map(number => number * 3)
  console.log('using .filter method: ',usingMapMethod)

}
map()
