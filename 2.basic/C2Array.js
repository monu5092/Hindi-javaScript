const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","bagman"]

//marvel_heros.push(dc_heros)  // its take another array as data its create problem

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros=marvel_heros.concat(dc_heros);// its merge all element array and store in new array
// console.log(allheros);

const all_new_heros =[...marvel_heros,...dc_heros] // this is the syntax of spread operator
//console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // its spreadout alll value
console.log(real_another_array);


console.log(Array.isArray("Monu"))
console.log(Array.from("Monu")) // Array.from convert the all string into string

console.log(Array.from({name:"Monu"})) // its intereseting case if not understand its return empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  // array.of used to create array using differnt element

