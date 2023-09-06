// const num_array:number [] = [0,1,2,3,4,5,6,7];
// let index:number = 0;

// for(; index < num_array.length; index++ ){
//     let data:number = num_array[index];

//     if(data%2 == 0 ){
//         console.log(data,'even');
//         continue;       // when value found, go out from loop
//     }
//     console.log(data,'odd')
// }

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
