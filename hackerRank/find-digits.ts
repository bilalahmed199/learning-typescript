function findDigits(n: number): number {
  // Write your code here

  let numberIntoArray: number[] = n.toString().split('').map(Number)
  let divisibleCount = 0
  console.log(numberIntoArray)
  numberIntoArray.forEach((num) => {
    if (n % num == 0) {
      divisibleCount += 1
    }
  })
  console.log(divisibleCount)
  return divisibleCount
}

console.log(findDigits(10))
