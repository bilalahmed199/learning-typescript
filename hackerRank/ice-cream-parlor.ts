function icecreamParlor(m: number, arr: number[]): number[] {
  let costCombo:number[] =[]
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === m) {
        costCombo.push(i+1)
        costCombo.push(j+1)
      }
    }
  }
  return costCombo
}

console.log(icecreamParlor(4, [1, 2,3,4]))
