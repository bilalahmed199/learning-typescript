function breakingRecords(scores: number[]): number[] {
  let mini: number = scores[0]
  let maxi: number = scores[0]
  let minCount = 0
  let maxCount = 0

  let count: number[] = []

  scores.forEach((score) => {
    if (score < mini) {
      mini = score
      minCount += 1
    } else if (score > maxi) {
      maxi = score
      maxCount += 1
    }
  })

  count[0] = maxCount
  count[1] = minCount
  return count
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
