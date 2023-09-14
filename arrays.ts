const names: string[] = ['bilal','ahmed'];
names.push('ali')
console.log(names)

// array to store both string and numbers
let array: (string | number)[] = ['test', 2,'test2',4]

// array of array
let array1: (string | number)[][] = [ ['test',4], [2,'test2',4], [0,1,2] ]

console.log(array1[0][1])   // will return value '4' from index 0
 
let str1= 'abc'
let str2= 'def'
console.log(str1.concat(str2))