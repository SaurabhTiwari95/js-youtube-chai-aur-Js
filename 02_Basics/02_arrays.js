const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

/*--------------------- CONCAT  ----------------------------*/


const allHeroes = marvel_heroes.concat(dc_heroes);

// console.log(allHeroes);

/*--------------------- SPREAD operator ----------------------------*/

const allNew_heroes = [...marvel_heroes,...dc_heroes]

console.log(allNew_heroes)

/*---------------------FLAT Method  ----------------------------*/

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

/*
    It will be preferred if we mention the real depth of the array
    but mentioning the infinity means it will check the to whatever the depth
    is there in the original array
*/ 

// console.log(real_another_array);

/*----------------- Other methods of arrays --------------------------------*/

// console.log(Array.isArray("SaurabhTiwari"))
// console.log(Array.from("SaurabhTiwari"))
console.log(Array.from({name : "SaurabhTiwari"}))

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3))
