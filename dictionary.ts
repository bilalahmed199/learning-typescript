let myD: any = { name: 'Mubarak', Age: 23, profession: 'SQA' }
let value
for (let key in myD) {
  value = myD[key]
  console.log(value)
}
