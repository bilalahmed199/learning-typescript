function getMoneySpent(keyboards: number[], drives: number[], b: number) {
  /*
   * Write your code here.
   */
  let sumArray: number[] = []
  keyboards.forEach((keyboard) => {
    drives.forEach((drive) => {
      if (keyboard + drive <= b) {
        sumArray.push(keyboard + drive)
      }
    })
  })

  let maxSum = sumArray[0]
  sumArray.forEach((num) => {
    if (num > maxSum) {
      maxSum = num
    }
  })
  return maxSum ?? -1 // return maxSum if valid value else return -1 as no value of maxSum found
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))
console.log(getMoneySpent([4], [5], 5))
