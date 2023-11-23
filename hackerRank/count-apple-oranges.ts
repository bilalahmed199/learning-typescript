const area_start:number  = 7
const area_end:number  = 10
const apple_tree_location:number  = 4
const orange_tree_location:number  = 12

const apple_fell:number [] = [2,3,-4]
const orange_fell:number [] = [3,-2,-4]
let apple_count = 0
let orange_count = 0

// counting Apples
let appleSum = apple_fell.map((apple)=>apple + apple_tree_location)
appleSum.forEach((apple)=>{
    if(apple >= area_start && apple <= area_end ){
        apple_count += 1
    }
})

// counting Oranges
let orangeSum = orange_fell.map((orange)=>orange + orange_tree_location)
orangeSum.map((orange)=>{
    if(orange >= area_start && orange <= area_end ){
        orange_count += 1
    }
})

console.log(`Total apples feel in house area are: ${apple_count}`)
console.log(`Total apples feel in house area are: ${orange_count}`)