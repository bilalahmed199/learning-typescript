function hurdleRace(k: number, height: number[]): number {
  // Write your code here
  // sorting using sort function
  let sortedHeightArray = height.sort((a, b) => a - b)
  console.log(sortedHeightArray)

  // accessing last element for largest height
  let largestHeight = sortedHeightArray[sortedHeightArray.length - 1]
  console.log(`largest height: ${largestHeight}`)
  console.log(`max jump range: ${k}`)
  let noOfDoses = 0
  if (k >= largestHeight) {
    return 0
  } else {
    noOfDoses = largestHeight - k
    console.log(`no of doses required: ${noOfDoses}`)
    if (noOfDoses > 0) {
      return noOfDoses
    } else if (noOfDoses <= 0) {
      return 0
    } else {
      return 0
    }
  }
}

// console.log(hurdleRace(4, [1, 6, 3, 5, 2, 5]))
console.log(hurdleRace(1, [1, 2, 3, 3, 2]))
