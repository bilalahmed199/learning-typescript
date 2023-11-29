// not solved yet

function pageCount(n: number, p: number) {
  // Write your code here
  // froward flip
  let loopCount = 0
  let flipCount = 0
  for (let i = 0; i == n; i++) {
    loopCount = i
    if (i == p) {
      flipCount = loopCount
    }
    for (let j = i + 1; j == n; j++) {
      loopCount = j
      if (j == p) {
        flipCount = loopCount - 2
      }
    }
    console.log(`flip count is: ${flipCount}`)

    //   return 0
  }
}
pageCount(6, 5)
