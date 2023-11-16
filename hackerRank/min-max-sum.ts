let dataa:number[] = [1,2,3,4,5]
let totalSum;
let newSum;
totalSum = dataa.reduce((num, number)=> num + number,0)
const summedData: number[] = []
for(let arr in dataa){
    newSum = totalSum - dataa[arr]
    summedData.push(newSum)
}

// finding min and max from an array
let dataaa:number[] = [8,2,3,4,5]
let min = summedData[0];
let max = 0;

summedData.forEach((num)=>{

    if (num > max){
        max = num
    }
    else if(min > num){
        min = num
    }
})

// console.log(max)
// console.log(min)

// Using Array.filter
max = Math.max(...dataaa);
min = Math.min(...dataaa);

console.log("\nUsing Array.filter:");
console.log("Max:", max);
console.log("Min:", min)