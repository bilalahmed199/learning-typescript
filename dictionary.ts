// // method 1: using Dictionary
let myD: any = { name: 'Mubarak', Age: 23, profession: 'SQA' }
let value
for (let key in myD) {
  value = myD[key]
  console.log(value)
}

// //////////////// method 2: using Map ///////////////////////
let arr: number[] = [1, 3, 2, 5, 9, 2]
let d = new Map()
for (let data of arr) {
  if (d.has(data)) {
    d.set(data, d.get(data) + 1)
  } else {
    d.set(data, 1)
  }
}
console.log(d)
// to find specif value using Map
for (let [key, value] of d.entries()) {
  if (value == 2) {
    console.log('passed')
    console.log(`key is: ${key} nd its value ${value}`)
    break
  }
}

/////////////// method 2: using Map example 2////////////////////////
let stringArray: string[] = ['a', 'b', 'c', 'd', 'e']
let numArray: number[] = [1, 3, 2, 5, 9]

let mp = new Map()
let indexx = 0
for (let data of stringArray) {
  mp.set(data, numArray[indexx])
  indexx++
}
console.log(mp)

for (let [key, value] of mp.entries()) {
  if (value == 5 && key == 'd') {
    console.log(`found key: '${key}' & its value: '${value}'`)
  }
}
