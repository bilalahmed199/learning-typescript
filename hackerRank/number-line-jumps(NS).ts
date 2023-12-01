// not solved by me

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Write your code here
  if (v1 === v2 && x1 !== x2) {
    return 'NO'
  } else if (v1 === v2 && x1 === x2) {
    return 'YES'
  } else if ((x2 - x1) / (v1 - v2) > 0 && (x2 - x1) % (v1 - v2) === 0) {
    return 'YES'
  } else {
    return 'NO'
  }
}

console.log(kangaroo(2, 1, 1, 2))
