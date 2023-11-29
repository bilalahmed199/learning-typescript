// not solved yet

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Write your code here
  let jumps = 0
  let k1DistancePerJump = x1 + v1
  let k2DistancePerJump = x2 + v2

  console.log(`k1 jump distance: ${k1DistancePerJump}`)
  console.log(`k2 jump distance: ${k2DistancePerJump}`)
  if (x2 > x1 && v2 > v1) {
    return 'NO'
  } else if (x2 < x1 && v2 > v1) {
    return 'YES'
  } else {
    return ''
  }
}

console.log(kangaroo(2, 1, 1, 2))
