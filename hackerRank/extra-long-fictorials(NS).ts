function extraLongFactorials(n: number): void {
  // Write your code here

  let numIntoArray: number[] = n.toString().split('').map(Number)

  numIntoArray.forEach((num)=>{
    num*num-1
  })
  console.log(numIntoArray);
  
}

extraLongFactorials(3)
