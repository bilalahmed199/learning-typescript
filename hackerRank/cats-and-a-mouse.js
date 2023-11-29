// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  let catADistance = Math.abs(x - z)
  let catBDistance = Math.abs(y - z)
  if (catADistance == catBDistance) {
    return 'Mouse C'
  } else if (catBDistance > catADistance) {
    return 'Cat A'
  } else {
    return 'Cat B'
  }
}
console.log(catAndMouse(1, 3, 2))
