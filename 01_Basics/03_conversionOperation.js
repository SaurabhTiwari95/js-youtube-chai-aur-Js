// let score = 33
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
// let score = false
let score = "saurabh"
 
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// console.log(typeof score);
// console.log(typeof(score));

/* 
    The Above Code will return *number* while the below line where *Number*
    is written depicts that it is a class base conversion
*/ 

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn)

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn)

let someNumber = 33

let stringNumber = String(someNumber);

// console.log(someNumber)
// console.log(typeof(someNumber))

/********************************** Operations *********************************************************/

let value = 3
let negValue = -value
console.log(value)
console.log(negValue)

console.log(2+2);
// result => 4
console.log(2-2);
// result => 0
console.log(2*2);
// result => 4
console.log(2**3);
/* result => 8 
@line 59 means we are calculating exponents i.e. 2 is raised to the power of 3 which is 2*2*2 = 8 */
console.log(2/2);
// this will divide the values and return 1 as result in the above example
console.log(2%2);
// this will return 0 in the above example, which is the modulus or we can say remainder
console.log("************************************************************");

let str1 = "hello"
let str2 = "Saurabh"
let str3 = str1+ str2
console.log(str3)

console.log("************************************************************");

console.log("1"+2);
// 12
console.log(1+"2");
// 12
console.log("1"+2+2);
// 122
console.log(1+2+"2");
// 32
/*
    Whatever dataType comes first JS converts all the following values in that dataType
    The Above conversion happens with the following link 
    https://tc39.es/ecma262/#sec-toprimitive
*/ 

console.log("************************************************************");
// console.log(+true);
// console.log(true+);
// console.log(+"");

console.log("************************************************************");

let num1,num2,num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter
console.log(gameCounter);

/*
    Read Prefix anf Postfix from JS and MDN docs
*/ 





