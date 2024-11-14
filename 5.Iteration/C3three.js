/*---------These are aarray specfic loop-------- */
// for of loop

const arr = [1,2,3,4,5]

for(const num of arr) {
   //console.log(num);
}

const greeting="Hello world!"
for(const greet of greeting){
    //console.log(`Each char is ${greet}`)
}

// Map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('UK',"United KingDom")

console.log(map);

for(const [key,value] of map){
    console.log(key, ':-' ,value);
}

const myObject ={
    game1: 'NFS',
    game : 'Spiderman'
}
// for(const [key,value] of myObject){  its not work
//     console.log(key,':-',value);
// }