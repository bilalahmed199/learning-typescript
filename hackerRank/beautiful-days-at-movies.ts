function beautifulDays(i: number, j: number, k: number): number {
  // Write your code here

  // i = starting day number
  // j = ending day number
  // k = divisible number

  let beautifulDaysCount = 0
  let duratiion: number[] = []

  for (let index = i; index <= j; index++) {
    duratiion.push(index)
  }
  console.log(duratiion)
  duratiion.forEach((num) => {
    let reversedNumb = Number(num.toString().split('').reverse().join(''))
    let dividedNumber = Math.abs(num - reversedNumb) / k
    if (Number.isInteger(dividedNumber) == true) {
      beautifulDaysCount += 1
      console.log('beautiful day')
    }
  })

  return beautifulDaysCount
}

console.log(beautifulDays(20, 23, 6))
