function countingValleys(steps: number, path: string): number {
  // Write your code here
  let pathStringToArray: string[] = path.split('')

  let seaLevel = 0
  let sumArray: number[] = []
  let valleyCount = 0

  pathStringToArray.forEach((str) => {
    if (str === 'U') {
      seaLevel += 1
      sumArray.push(seaLevel)
    } else {
      seaLevel -= 1
      sumArray.push(seaLevel)
    }
  })
  sumArray.unshift(0)
  console.log(pathStringToArray)
  console.log(`sea level: ${seaLevel}`)
  console.log(`sea level Array: ${sumArray}`)

  for (let num in sumArray) {
    // converted num from String to Number to use as index
    let index = Number(num)
    // console.log(sumArray[index + 1])

    // valley count = 1 if: steps = '0, -1' and '-1, 0'
    if (
      sumArray[index] === 0 &&
      index + 1 < sumArray.length &&
      sumArray[index + 1] === -1
    ) {
      valleyCount += 0.5
    }
    if (
      sumArray[index] === -1 &&
      index + 1 < sumArray.length &&
      sumArray[index + 1] === 0
    ) {
      valleyCount += 0.5
    }
  }
  return valleyCount
}

console.log(countingValleys(8, 'DDUUDDUDUUUD'))
