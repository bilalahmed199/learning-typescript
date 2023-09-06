// charAt(): to extract specific character from string by index number
var mystring1 = 'welcome';
console.log(mystring1.charAt(0))     //output: w 
console.log(mystring1.charAt(1))     //output: e 

//concat()
var str1: string = "Welcome";
var str2: string = "to";
var str3: string = "Typescript";
console.log(str1.concat(str2).concat(str3));     // returns: WelcometoTypescript

// replace()
var str = "Bilal is a good lad"
// Will replace all a with b in first occurance i.e., only replace in Bilal
console.log('character replaced: ', str.replace('a','b'))
// will replace whole word
console.log('word replaced: ', str.replace('good','baad'))

// toLowerCase() && toUpperCase()
str = 'Welocme to Pakistan';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// trim()
str = '      welcome    ';
console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());