function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  let dict: any = {}
  ar.forEach((num) => {
    dict[num] = 0
  })
  console.log(dict)

  ar.forEach((num) => {
    dict[num] += 1
  })
  console.log(dict)

  let dictKeyValue = 0
  let dictPair = 0
  let dictPairCount = 0
  for (let keyIndex in dict) {
    dictKeyValue = dict[keyIndex]
    dictPair = Math.floor(dictKeyValue / 2)
    dictPairCount += dictPair
  }
  console.log(`total pair count is: ${dictPairCount}`)

  return dictPairCount
}

console.log(sockMerchant(7, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
