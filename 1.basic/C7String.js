const name="Monu"
const repoCount=50

//console.log(name + repoCount)

/*String interpolation (`String`) =>this is string interpolation using backticks*/

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

/*decleration of the string*/
const gameName =new String('Monu');

/*method of the string*/
//console.log(gameName[0]);
//console.log(gameName._proto_);

console.log(gameName);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,2);
console.log(newString);

const anotherString = gameName.slice(1,3);
console.log(anotherString);

const newStringOne ="MonuKumar   "
console.log(newStringOne);
console.log(newStringOne.trim())// remove extra space;