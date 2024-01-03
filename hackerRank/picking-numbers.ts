/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a: number[]): number {
  let maxLength = 0

  for (let i = 0; i < a.length; i++) {
    let currentCount = 0

    for (let j = 0; j < a.length; j++) {
      if (Math.abs(a[i] - a[j]) <= 1 && Math.abs(a[i] - a[j+1]) <= 1) {
        currentCount++
      }
    }

    maxLength = Math.max(maxLength, currentCount)
  }

  return maxLength
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1])) // Output: 3
