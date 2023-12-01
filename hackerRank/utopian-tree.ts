function utopianTree(n: number): number {
  // Write your code here

  let height: number = 1

  if (n == 0) {
    return height
  }
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      height += 1
      console.log(`even loop : ${height}`)
    } else {
      height = height + height
      console.log(`odd loop : ${height}`)
    }
  }
  return height
}

console.log(utopianTree(4))
