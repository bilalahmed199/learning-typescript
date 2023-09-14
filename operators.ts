// ****************** Arithematic operators ****************** 
console.log('**** Arithematic operators****')
var x=2;
var y=4;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y) // x power y

// post-increment
x++;    //10+1 = 11
console.log(x)

// ****************** Assignment operators ****************** 
x = 10;
y=20;

x+=y;   //x=x+y;
console.log('**** Assignment operators****')
console.log('x+=y = ',x)
console.log(x-=y)   // x=x-y
console.log(x*=y)    // x=x*y
console.log(x/=y)    // x=x/y

// ****************** Comparison/Relational operators ****************** 
// < > <= >= !=
// always return true or false

console.log('**** Comparison operators****')
x=10;
y=20;
console.log(x>y)    //false
console.log(x<y)    //true
console.log(x>=y)    //false
console.log(x<=y)    //true
console.log(x!=y)    //true

// ****************** Logical operators ****************** 
// &&, ||, !
console.log('**** Logical operators****')
var a:boolean=true;
var b:boolean=false;
console.log(a && b)    //false as both should be true
console.log(a || b)    //true as atleast one should be true
console.log(!a)        //false: will return reverse output