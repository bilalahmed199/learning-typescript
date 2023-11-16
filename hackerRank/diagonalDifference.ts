// let array:number[][] = [[1,2,3],[4,5,6],[7,8,9]]

function diagonalDifference(array: number[][]): number {
    let sumOfDiagonal1 = 0
let sumOfDiagonal2 = 0
let diagonalDifference = 0
for (let diagonal in array){
    let diagonalIndex = parseInt(diagonal, 10);

    sumOfDiagonal1 += array[diagonal][diagonal]
    sumOfDiagonal2 += array[diagonal][array.length - diagonalIndex -1]
}
diagonalDifference = Math.abs((sumOfDiagonal1 - sumOfDiagonal2))
console.log(`diagonal difference is: ${diagonalDifference}`)
return diagonalDifference
}

diagonalDifference([[1,2,3],[4,9,6],[-10,8,9]])