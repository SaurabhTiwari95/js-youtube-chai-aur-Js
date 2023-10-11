/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.getTimezoneOffset())
console.log(typeof(myDate))
let mySpecificDate = new Date(2023,0,23);
/*
    Months starts from 0 in JS
*/ 
console.log(mySpecificDate.toDateString())
let myAnotherSpecificDate = new Date(2023,0,23,5,3)
console.log(myAnotherSpecificDate.toLocaleString())
let myAnotherSpecificDate1 = new Date("2023-01-14")
console.log(myAnotherSpecificDate1.toLocaleString())

let myAnotherSpecificDate2 = new Date("01-14-2023")
console.log(myAnotherSpecificDate2.toLocaleString())

let myTimeStamp = Date.now()
console.log(mySpecificDate.getTime())
console.log(myTimeStamp)
/*------------------------------------Convert date time in seconds------------------------------------*/ 
console.log(Math.floor(Date.now()/1000));

let newDate1 = new Date()

console.log(newDate1.getMonth()+1)
console.log("Month => "+newDate1.getDay());
// `${newDate.getDay()} and the time`

newDate1.toLocaleString('default',{
    weekday : "long",})