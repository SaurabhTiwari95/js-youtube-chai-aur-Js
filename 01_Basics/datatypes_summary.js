/*There are two types of dataTypes
1. Primitive
2. Non-Primitive(reference Type)
    This categorisation is based on how we keep the value and access those 
    values(call by value and call by reference)
*/ 

/*--------------------------------- 1. Primitive ----------------------------------------*/ 
/*
    These datatypes are accessed by using call by value which means whatever changes we do in the datatype 
    it will be done in the copy of that value
    
    Types : String,Number,Boolean,null,undefined,symbol

*/ 
/*--------------------------------- 1. Non-Primitive or Reference type----------------------------------------*/ 
/*
    Type : Array,Objects, Functions
*/ 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);



const heroes = ["shaktiman","naagraj","doga"]
let myObj = {
    name : "Saurabh",
    age : 27,
}

const myFunction = function(){
    // console.log("Hello World");
}

// how to determine the dataType of a variable

// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof myFunction);
/*

https://tc39.es/ecma262/#sec-typeof-operator

    13.5.3 The typeof Operator
    13.5.3.1 Runtime Semantics: Evaluation
    UnaryExpression : typeof UnaryExpression
    1. Let val be ? Evaluation of UnaryExpression.
    2. If val is a Reference Record, then
    a. If IsUnresolvableReference(val) is true, return "undefined".
    3. Set val to ? GetValue(val).
    4. If val is undefined, return "undefined".
    5. If val is null, return "object".
    6. If val is a String, return "string".
    7. If val is a Symbol, return "symbol".
    8. If val is a Boolean, return "boolean".
    9. If val is a Number, return "number".
    10. If val is a BigInt, return "bigint".
    11. Assert: val is an Object.
    12. NOTE: This step is replaced in section B.3.6.3.
    13. If val has a [[Call]] internal slot, return "function".
    14. Return "object".
*/

/*------------------------------------------------------------------------*/

/*---------------------------Stack and Heap Memory in JavaScript-----------------------*/ 

/*
    There are tqo types of memories in javaScript

    1.Stack(Used on all Primitive dataTypes)
        When Stack Memory is used then we work on the copy of the variable
        which means whatever we are changing, will only change the copy value and 
        not the original value (This can also be referred as call by Value)
    2. Heap (Used on all Non-Primitive dataTypes)
        When Heap Memory is used then we work on reference of the original value, so if we are working on the 
        heap memory then the original value will be changed (This can also refered as call by reference)
*/ 

let myPrimitiveVariable = "Stack"
let anotherPrimitiveVariable = myPrimitiveVariable
anotherPrimitiveVariable = "newPrimitiveVariable"
console.log("anotherPrimitiveVariable => "+ anotherPrimitiveVariable)
console.log("myPrimitiveVariable => "+ myPrimitiveVariable)

let user1 ={
    email : "user@google.com",
    upi : "485738497@upi"
}

console.log(user1)

let user2 = user1;

user2.email = "newEmail@google.com"
console.log(user2)
console.log(user1)
/*
    on line 109 & 110 the values will be changed for user email 
    but it isn't changed on line 104 because Js executes the code line by line and we are 
    printing the value before changing the value
*/ 