function birthday(s: number[], d: number, m: number): number {
  // Write your code here

  let segmentCount: number = 0
  for (let i = 0; i < s.length; i++) {
    let sum = 0
    for (let j = i; j < i + m && j < s.length; j++) {
      sum += s[j]
    }
    if (sum == d) {
      segmentCount += 1
    }
  }
  return segmentCount
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))
