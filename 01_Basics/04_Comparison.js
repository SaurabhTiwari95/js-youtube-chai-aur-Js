// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

/*----------------------------Conversion of one to another datType------------------------*/

// console.log("2" > 1);
// console.log("02" > 1);
console.log(null > 0)
// result => false
console.log(null == 0)
// result => false
console.log(null >= 0)
// result => true

/*
    The reason is that an equality check == and comparison > <>= <= work differently.
    Comparison convert null to a number, trteating it as 0.
    That's why (3) null >= 0 is true and (1) null > 0 is false
*/ 
console.log("-----------------------------------------------------------------------------------")
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
console.log("-----------------------------------------------------------------------------------")

/*
    ===
    This is a strict check which also check the dataTypes
*/