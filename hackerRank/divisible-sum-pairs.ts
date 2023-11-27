function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  let count = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        count += 1
      }
    }
  }

  return count
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
