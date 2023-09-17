const name ="Saurabh"
const repoCount = "50"

console.log(name+ repoCount + "Value")
// Above Syntax is an old way of doing console.log
/*  
    Below is the more preferred way of doing console.log and this 
    method is also include the concept of string interpolation ${variableName} 
*/
console.log(`hello My Name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Another_Way_Of_Declaring_a_Str-ing')
/*
    Below console will return an object string
    By doing this type of declaration we can access the variable with there index
*/ 
console.log(typeof(gameName)) 
console.log(gameName[8])
/* how to see availabe protoTypes*/ 
console.log(gameName.__proto__)
/* how to access availabe protoTypes*/ 
console.log(gameName.length)
console.log(gameName.toUpperCase())
/* With this protoType we can see what variables or the values are at the given position*/ 
console.log(gameName.charAt(8));
/* With this protoType we can see at what position are the values exists*/ 
console.log(gameName.indexOf("W"));
// const newVariable = oldVariable.substring(startNumber,endNumber)
// the value on the endNumber index won't be included
const newGameName = gameName.substring(0,4)
console.log(newGameName);
/* 
    adding an -ve number to the argument will start the reverse process which means the 
    slicing will happen from the end of the string, with +ve argument it will start 
    slicing from the start of the string
*/
const anotherNewGameName = gameName.slice(-34,9);
console.log(anotherNewGameName);

const newString1 ="    This is a example of TRIM method        of        the string    "
/*
    TRIM method removes the white spaces from start and end of the given STRING
*/ 
console.log(newString1)
console.log(newString1.trim())
const newString2 = "https://deployser.com/intro%20contact"
/*
    Browser doesn't understands the spaces so the spaces are converted into %20 which is URL encode
*/ 
console.log(newString2.replace('%20','-'))
/*
    includes() method will return whether the string has the given value or not
*/ 
console.log(newString2.includes('com'))
console.log(newString2.includes('chk'))
/*
    We can also Convert a String to an Array using split() method which takes a seperator as an 
    argument on the basis if that seperator it splits the string to an array
*/ 
console.log(gameName.split('_'))
