// Array : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const myArr = [ 0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman","nagraaj"]

/*
    Arrays create a shallow copy everytime which means the original array will also be changed.
    Shallow Copy of an object is a copy whose properties share the same reference point.

    Deep Copy of an object is a copy whose properties do not share the same reference point.
*/ 

/*---------------------------------------Array Methods---------------------------------------*/ 

const myArr2 = new Array(0,1,2,3,4,5)
// console.log(myArr2[0]);

// myArr2.push(6)
// console.log(myArr2)
// myArr2.push(7)
// console.log(myArr2)
// myArr2.pop()
// pop omits last value in the array
// console.log(myArr2)

// myArr2.unshift(9)

/*
   unshift adds the arguments in starting of the array, it's not preferred in every scenario 
   because of this method we have to move each element of arrays which can be time consuming 
   depending on the length of the array 
*/

// console.log(myArr2)
// myArr2.shift()
/* shift removes the element from starting of the array */
// console.log(myArr2)
/* 
  includes method check if the values is available in the array or not
*/
// console.log(myArr2.includes(9));

// console.log(myArr2.indexOf(3));
/* 
  indexof method checks at what index the argument passed is available
*/

/* 
  join() method binds all the value in the array and converts it into a string
*/
const newArr3 = myArr2.join()
// console.log(typeof(newArr3));

// slice, splice

const myarr3 = myArr2.slice(1,3)
console.log("A", myArr2);

// console.log(myarr3)
console.log("B",myArr2);

const myarr4 = myArr2.splice(2,3)
console.log("C",myarr4)