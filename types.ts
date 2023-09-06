// number
var second:number = 12;
var first:number = 12.45;
console.log(second,first)

// string
var empName:string = 'John';
var deptName:string = 'IT';
var test:string = empName + ' works in: ' + deptName + ' department';
console.log(test)

// boolean
var b:boolean = true;
console.log(b)

//any type: no specific type, it can store any kind of value
var val:any = 'hi';
val = 100;
console.log(val)
val = false;
console.log(val)


//void type function
// this func will not return any value
function hello():void{
    console.log('this function will not return any value')
}

