// find max candle 
let candles:number [] = [1,6,3,2,6,1,3,3]

let maximNum = 0
let count=0
candles.forEach((num)=>{
    if(num > maximNum){
        maximNum = num
    }
})

candles.forEach((num)=>{
    if(num == maximNum){
        count+=1
    }
})
console.log(maximNum)
console.log(count)
