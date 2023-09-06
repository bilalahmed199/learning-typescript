console.log('***condition1:')
var personAge:number = 20;
if (personAge > 18){
    console.log('user is eligible to vote')
}else{
    console.log('user is eligible to vote')
}


//----------------------------------------
// if number divided by 2 is zero
console.log('-----------------------')
console.log('***condition2:')
var num:number = 10;
if(num%2 == 0){
    console.log('number is even')
}else{
    console.log('number is odd')
}


//----------------------------------------
// compare 3 values
console.log('-----------------------')
console.log('***condition3:')
var num1:number = 10;
var num2:number = 20;
var num3:number = 6;

if(num1>num2 && num1>num3){
    console.log('num1 is greater than num2 & num3')
}
else if(num1<num2 && num1<num3){
    console.log('num1 is less than num2 & num3')
}
else if(num1 == num2 && num1==num3){
    console.log('num1 is equal to num2 & num3')
}
else{
    console.log('num1 is not equal to num2 & num3')
}


//----------------------------------------
// Ternary operators
//syntax = expression?statement1:statement2;
var value1:number = 10;
var value2:number = 20;

console.log('-----------------------')
console.log('***ternary operators:')
value1>value2 ? console.log('value1 is greater') : console.log('value2 is greater') 


//----------------------------------------
// swtich 
// to handle multiple conditions
console.log('-----------------------')
console.log('***Switch:')
var weekno:number = 3;  //Tuesday
switch(weekno)
{
case 1: console.log('Sunday'); break;    
case 2: console.log('Munday'); break;    
case 3: console.log('Tuesday'); break;    
case 4: console.log('Wednesday'); break;    
case 5: console.log('Thursday'); break;    
case 6: console.log('Friday'); break;    
case 7: console.log('Saturday'); break;    
default: console.log('Invalid week number');    
}
