function migratoryBirds(arr: number[]): number {
  // Write your code here
  let birdsDict: { [key: string]: number } = {}
  arr.forEach((key) => {
    birdsDict[key] = 0
  })
  console.log(birdsDict)

  arr.forEach((num) => {
    birdsDict[num] += 1
  })
  console.log(birdsDict)

  let maxBirdSighted
  let maxBirdSightedCount = 0
  let maxBirdsObj: { [key: string]: number } = {}
  for (let birdId in birdsDict) {
    if (birdsDict[birdId] > maxBirdSightedCount) {
      maxBirdSightedCount = birdsDict[birdId]
      maxBirdSighted = birdId

      maxBirdsObj[birdId] = birdsDict[birdId]
      if (birdsDict[birdId] == maxBirdsObj[birdId]) {
      }
    }
  }

  console.log(maxBirdSighted)
  console.log(maxBirdSightedCount)
  console.log(maxBirdsObj)
  // we converted Dictionary to array to assign first key of dictionary to a variable
  // to assign value, we will use: Object.values
  const maxBirdsObjKeys = Object.keys(maxBirdsObj)
  let requiredKey: number = Number(maxBirdsObjKeys[maxBirdsObjKeys.length - 1])
  console.log(`required key is: ${requiredKey}`)
  return requiredKey
}

console.log(migratoryBirds([3, 4, 5, 4, 4, 6, 3, 2, 1, 3, 4]))
