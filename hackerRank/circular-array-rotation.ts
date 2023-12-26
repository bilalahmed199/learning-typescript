function circularArrayRotation(
  a: number[],
  k: number,
  queries: number[],
): number[] {
  // Write your code here
  for (let i = 0; i < k; i++) {
    let temp = a[a.length - 1]
    a.pop()
    a.unshift(temp)
  }
  let queryArray: number[] = []
  queries.forEach((num) => {
    queryArray.push(a[num])
  })
  return queryArray
}

console.log(circularArrayRotation([1, 2, 3], 2, [1, 2]))
